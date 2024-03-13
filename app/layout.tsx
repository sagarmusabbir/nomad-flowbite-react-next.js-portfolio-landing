import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { inter } from "./ui/fonts";

import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

export const metadata: Metadata = {
  title: "Flowbite-React NextJs Starter",
  description:
    "NextJs Flowbite-React Tailwind Starter - Open Source Boilerplate from Third Bracket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
