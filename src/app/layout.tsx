import "./globals.css";
import { Josefin_Sans, Press_Start_2P } from "next/font/google";
import Navbar from "../components/Navbar";

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

export const metadata = {
  title: "Meu Portfólio",
  description: "Portfólio pessoal de Ícaro Sousa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${josefin.variable} ${minecraftFont.variable}`}>
      <body className="font-[var(--font-josefin)] bg-gradient-to-b from-black via-[#04001b] to-[#0a0047] text-white min-h-screen">
        <Navbar />
        <main className="px-4 sm:px-6 md:px-8 py-8 sm:py-12">{children}</main>
      </body>
    </html>
  );
}
