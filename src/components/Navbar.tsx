// src/components/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Manter o Image para o logo
import { FaBars, FaTimes } from 'react-icons/fa'; // Remover FaSearch

export default function Navbar() {
  // 🛑 REMOVIDO: const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/pregacoes", label: "Pregações" },
    { href: "/eventos", label: "Eventos" },
    { href: "/ministerios", label: "Sociedades" },
    { href: "/ofertas", label: "Ofertas" },
    { href: "/contato", label: "Contato" },
    // 🛑 NOVO LINK MANTIDO: Fotos
    { href: "/fotos", label: "Fotos" }, 
  ];

  return (
    <header className="fixed w-full bg-green-900 text-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        
        {/* LOGO e Nome da Igreja */}
        <Link href="/" className="flex items-center space-x-3">
          {/* Símbolo da Igreja (Desktop) */}
          <div className="relative w-10 h-10"> 
            <Image
              src="/logo.png" // 🛑 VERIFIQUE ESTE CAMINHO
              alt="Símbolo da Igreja"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <span className="text-lg font-bold">
            2ª Igreja Presbiteriana de Gurupi
          </span>
        </Link>

        {/* Links Desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-gray-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* 🛑 REMOVIDO: Campo e Botão de Busca Desktop */}

        {/* Botão Mobile (Ícones FaBars e FaTimes) */}
        <button
          className="md:hidden block text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir/Fechar Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-green-800 px-4 py-2">
          {/* Símbolo da Igreja (Mobile) */}
          <div className="flex items-center justify-center mb-4 pt-2">
             <div className="relative w-12 h-12"> 
                <Image
                    src="/logo.png" 
                    alt="Símbolo da Igreja"
                    fill
                    className="object-contain"
                    sizes="48px"
                />
            </div>
          </div>

          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 border-b border-green-700 hover:bg-green-700 px-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* 🛑 REMOVIDO: Botão de Busca Mobile */}
          </ul>
        </div>
      )}
    </header>
  );
}