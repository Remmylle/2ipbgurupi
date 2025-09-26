export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-green-800 text-center text-white">
        <div className="absolute inset-0 bg-black/50" />
        <img
          src="/igreja.jpg"
          alt="Foto da Igreja"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-extrabold mb-4">
            A Bíblia é a nossa única regra de fé e prática
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href="/sobre"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg"
            >
              Conheça Nossa Igreja
            </a>
            <a
              href="/pregacoes"
              className="px-6 py-3 bg-white text-green-800 hover:bg-gray-200 rounded-lg shadow-lg"
            >
              Ver Pregações
            </a>
          </div>
        </div>
      </section>

      {/* Blocos de Navegação */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            { title: "Sobre", desc: "Conheça nossa história e identidade.", link: "/sobre" },
            { title: "Pregações", desc: "Assista nossas últimas mensagens.", link: "/pregacoes" },
            { title: "Eventos", desc: "Veja nossa agenda e participe.", link: "/eventos" },
            { title: "Ministérios", desc: "Descubra como servir e participar.", link: "/ministerios" },
            { title: "Dízimos & Ofertas", desc: "Contribua com fidelidade.", link: "/ofertas" },
            { title: "Contato", desc: "Entre em contato conosco.", link: "/contato" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <a href={item.link} className="text-green-800 font-bold hover:underline">
                Acessar →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
