export default function OfertasPage() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Dízimos & Ofertas</h1>
      <p className="text-lg text-gray-700 mb-4">
        Contribuir é um ato de adoração e fidelidade a Deus. Seus dízimos e ofertas sustentam
        a obra do Senhor e permitem que o evangelho alcance mais pessoas.
      </p>
      <p className="text-gray-600 mb-6">
        “Cada um contribua segundo tiver proposto no coração, não com tristeza ou por necessidade;
        porque Deus ama a quem dá com alegria.” — 2 Coríntios 9:7
      </p>

      <a
        href="#"
        className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-800 transition"
      >
        Contribuir Agora
      </a>

      <div className="mt-12 flex justify-center">
        <div className="w-64 h-64 bg-gray-100 flex items-center justify-center rounded-xl shadow-md">
          <p className="text-gray-500">QR Code do Pix aqui</p>
        </div>
      </div>
    </section>
  )
}
