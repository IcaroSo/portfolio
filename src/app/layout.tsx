import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans, Press_Start_2P } from "next/font/google";
import CursorGlow from "../components/CursorGlow";
import Navbar from "../components/Navbar";

const siteUrl = "https://portfolio-icru.vercel.app";
const siteTitle = "Ícaro de Sousa Rodrigues | Desenvolvedor Full Stack";
const siteDescription =
  "Portfólio de Ícaro de Sousa Rodrigues, Desenvolvedor Full Stack com experiência em React, Next.js, TypeScript, Node.js, NestJS, APIs REST e PostgreSQL.";
const shareImage = "/icons/aba/logo.png";

const minecraftFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-minecraft",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Ícaro de Sousa Rodrigues", url: siteUrl }],
  creator: "Ícaro de Sousa Rodrigues",
  publisher: "Ícaro de Sousa Rodrigues",
  keywords: [
    "Ícaro de Sousa Rodrigues",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Front-end",
    "Desenvolvedor Back-end",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "APIs REST",
  ],
  icons: {
    icon: "/icons/aba/logo-aba.png",
    shortcut: "/icons/aba/logo-aba.png",
    apple: "/icons/aba/logo-aba.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Portfólio Ícaro de Sousa Rodrigues",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: shareImage,
        width: 1254,
        height: 1254,
        alt: "Logo do portfólio de Ícaro de Sousa Rodrigues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: shareImage,
        alt: "Logo do portfólio de Ícaro de Sousa Rodrigues",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${josefin.variable} ${minecraftFont.variable}`}>
      <body
        suppressHydrationWarning
        className="relative isolate font-[var(--font-josefin)] text-foreground min-h-screen"
      >
        <CursorGlow />
        <Navbar />
        <main className="relative z-10 px-4 sm:px-6 md:px-8 py-8 sm:py-12">{children}</main>
      </body>
    </html>
  );
}