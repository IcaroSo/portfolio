"use client";

import { useEffect, useRef, useState } from "react";

const CURSOR_GLOW_QUERY = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

export default function CursorGlow() {
    const [isEnabled, setIsEnabled] = useState(false);
    const frameRef = useRef<number | null>(null);
    const isActiveRef = useRef(false);
    const targetRef = useRef({ x: -1000, y: -1000 });
    const currentRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const pointerQuery = window.matchMedia(CURSOR_GLOW_QUERY);
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const root = document.documentElement;
        let removePointerListeners: (() => void) | null = null;

        const setGlowStrength = (value: string) => {
            root.style.setProperty("--cursor-glow-strength", value);
        };

        const resetGlow = () => {
            isActiveRef.current = false;
            targetRef.current = { x: -1000, y: -1000 };
            currentRef.current = { x: -1000, y: -1000 };
            root.style.setProperty("--cursor-glow-x", "-1000px");
            root.style.setProperty("--cursor-glow-y", "-1000px");
            setGlowStrength("0");

            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
                frameRef.current = null;
            }
        };

        const hideGlow = () => {
            resetGlow();
        };

        const animateGlow = () => {
            frameRef.current = null;

            if (!isActiveRef.current) {
                return;
            }

            const current = currentRef.current;
            const target = targetRef.current;

            current.x += (target.x - current.x) * 0.16;
            current.y += (target.y - current.y) * 0.16;

            root.style.setProperty("--cursor-glow-x", `${current.x}px`);
            root.style.setProperty("--cursor-glow-y", `${current.y}px`);

            frameRef.current = requestAnimationFrame(animateGlow);
        };

        const startFrame = () => {
            if (frameRef.current === null) {
                frameRef.current = requestAnimationFrame(animateGlow);
            }
        };

        const showGlow = () => {
            if (!isActiveRef.current) {
                isActiveRef.current = true;
                setGlowStrength("0.009");
            }

            startFrame();
        };

        const handlePointerMove = (event: PointerEvent) => {
            targetRef.current.x = event.clientX;
            targetRef.current.y = event.clientY;
            showGlow();
        };

        const addPointerListeners = () => {
            if (removePointerListeners) {
                return;
            }

            window.addEventListener("pointermove", handlePointerMove, { passive: true });
            window.addEventListener("pointerleave", hideGlow);
            window.addEventListener("blur", hideGlow);

            removePointerListeners = () => {
                window.removeEventListener("pointermove", handlePointerMove);
                window.removeEventListener("pointerleave", hideGlow);
                window.removeEventListener("blur", hideGlow);
            };
        };

        const removeListeners = () => {
            if (removePointerListeners) {
                removePointerListeners();
                removePointerListeners = null;
            }
        };

        const syncGlowAvailability = () => {
            const shouldEnable = pointerQuery.matches && !reducedMotionQuery.matches;

            if (shouldEnable) {
                setIsEnabled(true);
                addPointerListeners();
                return;
            }

            removeListeners();
            resetGlow();
            setIsEnabled(false);
        };

        syncGlowAvailability();

        pointerQuery.addEventListener("change", syncGlowAvailability);
        reducedMotionQuery.addEventListener("change", syncGlowAvailability);

        return () => {
            pointerQuery.removeEventListener("change", syncGlowAvailability);
            reducedMotionQuery.removeEventListener("change", syncGlowAvailability);
            removeListeners();
            resetGlow();
        };
    }, []);

    if (!isEnabled) {
        return null;
    }

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
            style={{
                background:
                    "radial-gradient(520px circle at var(--cursor-glow-x) var(--cursor-glow-y), rgb(255 255 255 / calc(var(--cursor-glow-strength) * 0.4)) 0%, rgb(220 228 245 / calc(var(--cursor-glow-strength) * 0.2)) 22%, rgb(154 179 213 / calc(var(--cursor-glow-strength) * 0.07)) 48%, transparent 78%)",
            }}
        />
    );
}