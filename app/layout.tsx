import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KADDOURI Ayoub — ePortfolio | Ingénieur Système Logiciel · ENSEEIHT",
  description:
    "ePortfolio professionnel de KADDOURI Ayoub, élève ingénieur en Système Logiciel à l'ENSEEIHT Toulouse. Full-Stack Development, Cloud/DevOps, AWS. Recherche stage juin 2027 + alternance septembre 2027.",
  keywords: [
    "KADDOURI Ayoub",
    "ePortfolio",
    "ENSEEIHT",
    "Ingénieur Logiciel",
    "Full-Stack",
    "Cloud",
    "DevOps",
    "AWS",
    "Spring Boot",
    "React",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
