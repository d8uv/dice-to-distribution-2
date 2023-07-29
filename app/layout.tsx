import "./globals.css";
import type { Metadata } from "next";
import { EB_Garamond, Noto_Sans_Symbols_2 } from "next/font/google";

const serifFont = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});
const symbolFont = Noto_Sans_Symbols_2({
  weight: "400",
  subsets: ["symbols"],
  display: "optional",
  variable: "--font-symbols",
});

export const metadata: Metadata = {
  title: "Dice to Distribution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${serifFont.variable} ${symbolFont.variable} font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
