import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TranslateAI - AI-Powered Text Translation",
  description:
    "Translate text between 100+ languages with advanced AI technology. Fast, accurate, and easy to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody inter={inter.className}>{children}</ClientBody>
    </html>
  );
}
