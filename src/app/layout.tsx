import React from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Bee's Pilates Studio",
  description: "Connect · Sculpt · Strengthen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <body className={`min-h-screen bg-white text-gray-900 font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
