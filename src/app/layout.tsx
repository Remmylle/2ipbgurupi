// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // <-- CORRIGIDO!
import Footer from "@/components/Footer"; // <-- CORRIGIDO!

export const metadata: Metadata = {
  title: "Segunda Igreja Presbiteriana de Gurupi",
  description: "A Bíblia é a nossa única regra de fé e prática",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}