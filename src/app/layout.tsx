import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "The Dione's — Conseil conjugal & familial",
  description:
    "Culture, famille, lifestyle, business : l'univers The Dione's. Conseil conjugal et familial à Paris et en visioconférence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${karla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
