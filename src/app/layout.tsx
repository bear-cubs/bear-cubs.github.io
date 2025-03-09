import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Mona_Sans as FontSans } from "next/font/google";

import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bearcubs",
  description: "Bearcubs leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${geistMono.variable} antialiased w-screen font-sans min-h-screen bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
