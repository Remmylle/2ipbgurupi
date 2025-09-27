"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/pregacoes", label: "Pregações" },
    { href: "/eventos", label: "Eventos" },
    { href: "/ministerios", label: "Ministérios" },
    { href: "/ofertas", label: "Ofertas" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed w-full bg-green-900 text-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-lg font-bold">
          2ª Igreja Presbiteriana de Gurupi
        </Link>

        {/* Botão Mobile */}
        <button
          className="md:hidden block"
          onClick={() => setOpen(!open)}
          aria-label="Abrir Menu"
        >
          ☰
        </button>

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
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-green-800 px-4 py-2">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 border-b border-green-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
