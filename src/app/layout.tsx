import "./globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // você escolhe o que quer
  variable: "--font-josefin"
});

export const metadata = {
  title: "Meu Portfólio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={josefin.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}