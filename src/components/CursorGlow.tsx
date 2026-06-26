"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const frameRef = useRef<number | null>(null);
    const isActiveRef = useRef(false);
    const targetRef = useRef({ x: -1000, y: -1000 });
    const currentRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const finePointer = window.matchMedia("(pointer: fine)");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (!finePointer.matches || reducedMotion.matches) {
            return;
        }

        const root = document.documentElement;

        const setGlowStrength = (value: string) => {
            root.style.setProperty("--cursor-glow-strength", value);
        };

        const showGlow = () => {
            if (!isActiveRef.current) {
                isActiveRef.current = true;
                setGlowStrength("0.009");
            }
        };

        const hideGlow = () => {
            isActiveRef.current = false;
            setGlowStrength("0");
        };

        const handlePointerMove = (event: PointerEvent) => {
            targetRef.current.x = event.clientX;
            targetRef.current.y = event.clientY;
            showGlow();
        };

        const animateGlow = () => {
            const current = currentRef.current;
            const target = targetRef.current;

            current.x += (target.x - current.x) * 0.16;
            current.y += (target.y - current.y) * 0.16;

            root.style.setProperty("--cursor-glow-x", `${current.x}px`);
            root.style.setProperty("--cursor-glow-y", `${current.y}px`);

            frameRef.current = requestAnimationFrame(animateGlow);
        };

        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("pointerleave", hideGlow);
        window.addEventListener("blur", hideGlow);
        frameRef.current = requestAnimationFrame(animateGlow);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", hideGlow);
            window.removeEventListener("blur", hideGlow);
            setGlowStrength("0");

            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 hidden md:block"
            style={{
                background:
                    "radial-gradient(520px circle at var(--cursor-glow-x) var(--cursor-glow-y), rgb(255 255 255 / calc(var(--cursor-glow-strength) * 0.4)) 0%, rgb(220 228 245 / calc(var(--cursor-glow-strength) * 0.2)) 22%, rgb(154 179 213 / calc(var(--cursor-glow-strength) * 0.07)) 48%, transparent 78%)",
            }}
        />
    );
}
