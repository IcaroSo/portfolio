"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const links = [
  { name: "Início", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Trajetória", href: "#experiences" },
  { name: "Projetos", href: "#projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-default bg-background/85 backdrop-blur-md">
      <div className="relative flex min-h-20 items-center justify-center px-4 sm:px-6 md:px-8">
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          aria-label="Ir para o inicio"
          className="absolute left-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-border-default bg-background shadow-[0_10px_24px_var(--shadow-purple)] transition hover:-translate-y-0.5 hover:border-border-hover sm:left-6 md:left-8"
        >
          <Image
            src="/icons/aba/logo.png"
            alt="Logo Icaro Sousa"
            width={56}
            height={56}
            className="h-full w-full rounded-full object-cover"
            priority
          />
        </Link>

        {/* Desktop Links (visivel a partir de md) */}
        <div className="hidden items-center justify-center gap-6 text-base font-medium sm:gap-8 sm:text-lg md:flex md:gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-all duration-200 ${isActive
                  ? "text-accent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-accent after:rounded after:shadow-[0_0_18px_var(--shadow-purple)]"
                  : "text-foreground hover:text-accent-hover"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle Button (visivel apenas no mobile) */}
        <div className="absolute right-4 z-50 sm:right-6 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border-default bg-background/90 text-foreground shadow-[0_10px_24px_var(--shadow-purple)] backdrop-blur-md transition-all hover:text-accent-hover focus:outline-none"
            aria-label="Toggle menu"
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-4 top-full z-40 w-56 overflow-hidden rounded-2xl border border-border-default bg-background/95 py-5 shadow-2xl backdrop-blur-xl sm:right-6 md:hidden">
          <div className="flex flex-col items-center gap-5 text-base font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative pb-1 transition-all duration-200 ${isActive
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
