import React from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "PWB Pilates Studio - Pilates with Bee",
  description:
    "Move · Nourish · Transform - Professional Pilates instruction and nutrition guidance in Metro Manila, Philippines",
  keywords:
    "pilates, nutrition, wellness, fitness, Metro Manila, Philippines, Bee, instructor",
  openGraph: {
    title: "PWB Pilates Studio - Pilates with Bee",
    description:
      "Move · Nourish · Transform - Professional Pilates instruction and nutrition guidance",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
        width: 800,
        height: 600,
        alt: "PWB Pilates Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable}`}>
      <head>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`min-h-screen bg-white text-gray-900 font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
