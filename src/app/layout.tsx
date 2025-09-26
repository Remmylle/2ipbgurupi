import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Segunda Igreja Presbiteriana de Gurupi - TO",
  description: "A Bíblia é a nossa única regra de fé e prática",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        {/* Header */}
        <header className="bg-green-900 text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">
              <Link href="/">Segunda Igreja Presbiteriana de Gurupi - TO</Link>
            </h1>
            <nav className="space-x-6">
              <Link href="/sobre" className="hover:text-gray-300">Sobre</Link>
              <Link href="/pregacoes" className="hover:text-gray-300">Pregações</Link>
              <Link href="/eventos" className="hover:text-gray-300">Eventos</Link>
              <Link href="/ministerios" className="hover:text-gray-300">Ministérios</Link>
              <Link href="/ofertas" className="hover:text-gray-300">Ofertas</Link>
              <Link href="/contato" className="hover:text-gray-300">Contato</Link>
            </nav>
          </div>
        </header>

        {/* Conteúdo da página */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-green-900 text-white mt-12">
          <div className="max-w-7xl mx-auto p-6 text-center">
            <p>&copy; {new Date().getFullYear()} Segunda Igreja Presbiteriana de Gurupi - TO</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
