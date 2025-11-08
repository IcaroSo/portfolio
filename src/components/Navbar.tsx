"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Experiences", href: "/experiences" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center gap-10 py-6 text-lg font-medium bg-transparent">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative pb-1 transition-all duration-200 ${
              isActive
                ? "text-indigo-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-indigo-800 after:rounded after:shadow-[0_0_25px_#3b82f6]"
                : "text-white hover:text-blue-600"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
