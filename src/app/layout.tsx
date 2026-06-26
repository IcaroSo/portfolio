import "./globals.css";
import { Josefin_Sans, Press_Start_2P } from "next/font/google";
import CursorGlow from "../components/CursorGlow";
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
  icons: {
    icon: "/icons/aba/logo.png",
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
