import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "정유건 (Ugeon Jung) | Cyber Business Card",
  description: "Software Engineer Digital ID & Cyber Business Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-[100dvh] overflow-hidden antialiased`}
    >
      <body className="h-[100dvh] w-full overflow-hidden bg-[#050505] text-zinc-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
