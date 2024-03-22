import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CO-DSL",
  description: "CO-DSL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black text-gray-400 ${nunito.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
