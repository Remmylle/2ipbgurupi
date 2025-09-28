// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Segunda Igreja Presbiteriana de Gurupi",
  description: "A Bíblia é a nossa única regra de fé e prática",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-800">
        
        {/* Navbar Fixo: Garante que ele fique sempre visível no topo */}
        <div className="fixed w-full z-10 top-0 left-0">
          <Navbar />
        </div>
        
        {/* Conteúdo Principal: Sem padding superior para o banner da igreja colar */}
        <main>{children}</main> 
        
        <Footer />
      </body>
    </html>
  );
}