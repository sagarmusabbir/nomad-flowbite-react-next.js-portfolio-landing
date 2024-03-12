import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowbiteReact-NextJs-Boilerplate",
  description:
    "A Boilerplate for NextJs + FlowbiteReact - Open Spurce boilerplate from Third Bracket Product",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
