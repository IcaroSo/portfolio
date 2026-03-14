"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Início", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experiências e Formação", href: "#experiences" },
  { name: "Certificados", href: "#certificates" },
  { name: "Projetos", href: "#projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#04001b]/80 backdrop-blur-md border-b border-indigo-900/30 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 py-4 sm:py-5 text-base sm:text-lg font-medium">
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
    </nav>
  );
}
