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
  title: "정유건 (Ugeon Jung) | mylink - 올인원 링크 허브",
  description: "아이디어를 견고한 제품으로 실현하는 엔지니어 정유건의 공식 링크트리 허브입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
    >
      <body className="min-h-screen w-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
