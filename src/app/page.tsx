import Image from "next/image";

export default function Home() {
  const grandeComissaoTexto =
    "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos. (Mateus 28:19-20)";

  // 🛑 URL DO GOOGLE MAPS
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.1564965774471!2d-49.057860770076395!3d-11.729505044021687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933e956d9b91bc4d%3A0xb019ed887822295!2s2%20Igreja%20Presbiteriana%20de%20Gurupi!5e0!3m2!1spt-BR!2sbr!4v1758941502708!5m2!1spt-BR!2sbr";

  return (
    <section className="text-center">
      {/* Hero Section */}
      <div className="relative w-full h-[65vh] md:h-[70vh]">
        <Image
          src="/igreja.jpg"
          alt="Foto da Igreja"
          fill
          className="object-cover"
          priority
        />
        {/* Gradiente só na parte inferior */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Texto alinhado na parte de baixo */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
            Segunda Igreja Presbiteriana de Gurupi - TO
          </h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl drop-shadow-lg">
            A Bíblia é a nossa única regra de fé e prática
          </p>
        </div>
      </div>

      {/* Seções de Boas-Vindas e Cultos */}
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2">
        <div className="bg-white shadow-md p-5 rounded-xl text-center">
          <h2 className="text-xl font-bold mb-2">Seja Bem-vindo!</h2>
          <p>
            Estamos felizes em receber você. Aqui a Palavra de Deus é central em
            tudo o que fazemos.
          </p>
        </div>

        {/* Bloco Nossos Cultos */}
        <div className="bg-white shadow-md p-5 rounded-xl text-left">
          <h2 className="text-xl font-bold mb-2 text-center">Nossos Cultos</h2>
          <p className="text-center mb-3">
            Participe dos cultos e ministérios da nossa igreja. Todos são
            convidados a estar conosco!
          </p>

          <ul className="space-y-2 px-4 text-sm">
            <li className="font-semibold text-gray-800">
              <span className="text-green-800">Quarta-feira:</span>
              <br />
              19:30h - Estudo Bíblico
            </li>
            <li className="font-semibold text-gray-800">
              <span className="text-green-800">Domingo pela manhã:</span>
              <br />
              09:00h - Escola Bíblica Dominical (EBD)
            </li>
            <li className="font-semibold text-gray-800">
              <span className="text-green-800">Domingo à noite:</span>
              <br />
              19:00h - Culto Solene
            </li>
          </ul>
        </div>
        {/* Fim do Bloco Nossos Cultos */}
      </div>

      {/* Seção: Pastor e Grande Comissão */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-gray-100 shadow-xl p-6 rounded-2xl grid gap-6 md:grid-cols-3 items-center">
          {/* Foto do Pastor */}
          <div className="relative h-56 w-full md:h-64 md:col-span-1 mx-auto">
            <Image
              src="/pastor.jpg"
              alt="Foto do Pastor"
              fill
              className="object-cover rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Texto Bíblico e Chamada */}
          <div className="text-left md:col-span-2">
            <h2 className="text-2xl font-extrabold text-green-800 mb-3">
              Nossa Missão
            </h2>
            <p className="text-base text-gray-700 italic border-l-4 border-green-600 pl-3 bg-white p-2 rounded-md shadow-inner">
              {grandeComissaoTexto}
            </p>
            <p className="mt-3 text-gray-600 text-sm">
              Esta é a direção que seguimos como igreja, levando a Palavra de
              Cristo a todos.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* 🛑 SEÇÃO GOOGLE MAPS (Última Seção) */}
      {/* ---------------------------------------------------------------- */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
            Encontre-nos
          </h2>

          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da 2ª Igreja Presbiteriana de Gurupi"
            ></iframe>
          </div>

          <p className="mt-4 text-center text-gray-600">
            Visite-nos. Será um prazer recebê-lo em nossa comunidade!
          </p>
        </div>
      </div>
    </section>
  );
}
