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
    <nav className="w-full sticky top-0 z-50 md:bg-[#04001b]/80 md:backdrop-blur-md md:border-b md:border-indigo-900/30">
      
      {/* Desktop Links (visível a partir de md) */}
      <div className="hidden md:flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 gap-6 sm:gap-8 md:gap-10 text-base sm:text-lg font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 transition-all duration-200 ${isActive
                ? "text-indigo-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-indigo-600 after:rounded after:shadow-[0_0_20px_#3b82f6]"
                : "text-white hover:text-blue-500"
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Toggle Button (visível apenas no mobile) */}
      <div className="md:hidden absolute top-4 right-4 sm:top-5 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#04001b]/90 backdrop-blur-md border border-indigo-500/30 shadow-[0_0_15px_rgba(79,70,229,0.3)] text-white hover:text-indigo-400 focus:outline-none transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span className="text-3xl font-bold leading-none px-1 pb-1">&times;</span>
          ) : (
            <Image 
              src="/icons/home/icons8-menu-250.png" 
              alt="Menu" 
              width={24} 
              height={24}
              className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-4 sm:right-6 w-56 bg-[#04001b]/95 backdrop-blur-xl border border-indigo-900/50 rounded-2xl shadow-2xl overflow-hidden py-5 z-40">
          <div className="flex flex-col items-center gap-5 text-base font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative pb-1 transition-all duration-200 ${isActive
                    ? "text-indigo-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-indigo-600 after:rounded after:shadow-[0_0_20px_#3b82f6]"
                    : "text-white hover:text-blue-500"
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
