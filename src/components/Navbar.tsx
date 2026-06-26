"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "Início", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Trajetória", href: "#experiences" },
  { name: "Projetos", href: "#projects" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const syncHash = () => {
      const currentHash = window.location.hash;

      if (links.some((link) => link.href === currentHash)) {
        setActiveHref(currentHash);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-default bg-background/85 backdrop-blur-md">
      <div className="relative flex min-h-20 items-center justify-center px-4 sm:px-6 md:px-8">
        <Link
          href="#home"
          onClick={() => {
            setActiveHref("#home");
            setIsOpen(false);
          }}
          aria-label="Ir para o início"
          aria-current={activeHref === "#home" ? "location" : undefined}
          className={`absolute left-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-border-default bg-background shadow-[0_10px_24px_var(--shadow-purple)] transition hover:-translate-y-0.5 hover:border-border-hover sm:left-6 md:left-8 ${focusRing}`}
        >
          <Image
            src="/icons/aba/logo.png"
            alt="Logo Ícaro Sousa"
            width={56}
            height={56}
            className="h-full w-full rounded-full object-cover"
          />
        </Link>

        <div className="hidden items-center justify-center gap-6 text-base font-medium sm:gap-8 sm:text-lg md:flex md:gap-10">
          {links.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveHref(link.href)}
                className={`relative pb-1 transition-all duration-200 ${focusRing} ${isActive
                  ? "text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-accent after:rounded after:shadow-[0_0_18px_var(--shadow-purple)]"
                  : "text-foreground hover:text-accent-hover"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="absolute right-4 z-50 sm:right-6 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-border-default bg-background/90 text-foreground shadow-[0_10px_24px_var(--shadow-purple)] backdrop-blur-md transition-all hover:text-accent-hover ${focusRing}`}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <span className="px-1 pb-1 text-3xl font-bold leading-none">&times;</span>
            ) : (
              <Image
                src="/icons/home/icons8-menu-250.png"
                alt="Menu"
                width={24}
                height={24}
                className="brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
              />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute right-4 top-full z-40 w-56 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border-default bg-background/95 py-5 shadow-2xl backdrop-blur-xl sm:right-6 md:hidden"
        >
          <div className="flex flex-col items-center gap-5 text-base font-medium">
            {links.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    setActiveHref(link.href);
                    setIsOpen(false);
                  }}
                  className={`relative pb-1 transition-all duration-200 ${focusRing} ${isActive
                    ? "text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-accent after:rounded after:shadow-[0_0_18px_var(--shadow-purple)]"
                    : "text-foreground hover:text-accent-hover"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}