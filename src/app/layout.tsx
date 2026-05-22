import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Facilitation Proposal — Emergence Global Consulting × Global Electronics Association",
  description: "Strategic planning facilitation proposal for the Global Electronics Association.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="antialiased bg-ink text-slate-warm font-sans selection:bg-gold/30 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
