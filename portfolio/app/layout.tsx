import type { Metadata } from "next";
import { Cairo, Geist } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "المستقبل تك",
  description: "خدمات تكنولوجية متكاملة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body className={`${cairo.className} min-h-screen bg-[#F5F7FA]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}