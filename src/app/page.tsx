import Image from "next/image";

export default function Home() {
  const grandeComissaoTexto = "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos. (Mateus 28:19-20)";

  return (
    <section className="text-center">
      {/* Hero Section - REDUZINDO ALTURA AQUI */}
      {/* Altura de 60vh para celulares, e 65vh (era 80vh) para desktop */}
      <div className="relative w-full h-[60vh] md:h-[65vh]"> 
        <Image
          src="/igreja.jpg"
          alt="Foto da Igreja"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold"> {/* Texto um pouco menor em desktop */}
            Segunda Igreja Presbiteriana de Gurupi - TO
          </h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl"> {/* Margem e texto menores */}
            A Bíblia é a nossa única regra de fé e prática
          </p>
        </div>
      </div>

      {/* Seções de Boas-Vindas e Cultos - REDUZINDO ESPAÇAMENTO EXTERNO AQUI */}
      {/* De py-12 para py-8 */}
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2"> {/* Gap menor */}
        <div className="bg-white shadow-md p-5 rounded-xl text-center"> {/* Padding menor */}
          <h2 className="text-xl font-bold mb-2">Seja Bem-vindo!</h2>
          <p>
            Estamos felizes em receber você. Aqui a Palavra de Deus é central em
            tudo o que fazemos.
          </p>
        </div>

        {/* Bloco Nossos Cultos - AJUSTANDO ESPAÇAMENTO INTERNO */}
        <div className="bg-white shadow-md p-5 rounded-xl text-left"> {/* Padding menor */}
          <h2 className="text-xl font-bold mb-2 text-center">Nossos Cultos</h2>
          <p className="text-center mb-3"> {/* Margem menor */}
            Participe dos cultos e ministérios da nossa igreja. Todos são
            convidados a estar conosco!
          </p>
          
          <ul className="space-y-2 px-4 text-sm"> {/* Espaçamento e texto menores */}
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
                19:00h - Culto Evangelístico
            </li>
          </ul>
        </div>
        {/* Fim do Bloco Nossos Cultos */}
      </div>

      {/* Seção: Pastor e Grande Comissão (Mateus 28:19-20) - REDUZINDO ESPAÇAMENTO EXTERNO AQUI */}
      {/* De pb-12 para pb-8 */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-gray-100 shadow-xl p-6 rounded-2xl grid gap-6 md:grid-cols-3 items-center"> {/* Padding e gap menores */}
          
          {/* Foto do Pastor - REDUZINDO ALTURA AQUI */}
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
            <h2 className="text-2xl font-extrabold text-green-800 mb-3">Nossa Missão</h2> {/* Texto menor */}
            <p className="text-base text-gray-700 italic border-l-4 border-green-600 pl-3 bg-white p-2 rounded-md shadow-inner"> {/* Texto e padding menores */}
              {grandeComissaoTexto}
            </p>
            <p className="mt-3 text-gray-600 text-sm"> {/* Margem e texto menores */}
              Esta é a direção que seguimos como igreja, levando a Palavra de Cristo a todos.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}