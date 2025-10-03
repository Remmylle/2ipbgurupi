export default function SobrePage() {
  return (
    // py-24 é para descer o conteúdo abaixo do Navbar fixo
    <section className="py-24 max-w-6xl mx-auto px-4">
      
      {/* TÍTULO PRINCIPAL: QUEM SOMOS (Tamanho maior - text-4xl) */}
      <h1 className="text-5xl font-extrabold text-green-900 mb-8 border-b-2 border-green-100 pb-2">
        Quem Somos
      </h1>
      
      {/* PARÁGRAFO DE INTRODUÇÃO */}
      <p className="text-lg text-gray-700 mb-8 text-justify leading-relaxed">
        Somos a Segunda Igreja Presbiteriana de Gurupi - TO, uma comunidade reformada,
        comprometida com a pregação fiel da Palavra de Deus e a comunhão dos santos.
        A Segunda Igreja Presbiteriana de Gurupi foi fundada em 1967 como um ponto de pregação da 1ª IPG, 
        na Rua da Mata, sob a liderança do Evang. Carlito Pereira, 
        passando a congregação em 1968 e sendo organizada como igreja em 5 de março de 1994. 
        A igreja é reformada, confessional e segue a Bíblia como única regra de fé e prática, 
        além de se federar ao Presbitério Sul do Tocantins (PSTS) da Igreja Presbiteriana do Brasil (IPB).
      </p>

      {/* ---------------------------------------------------------------- */}
      {/* SEÇÃO 1: MARCOS HISTÓRICOS */}
      {/* ---------------------------------------------------------------- */}
      {/* SUBTÍTULO: (Tamanho menor que o H1 - text-3xl) */}
      <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4 border-l-4 border-green-500 pl-3">
        Marcos Históricos
      </h2>
      
      {/* LISTA DE MARCOS */}
      <ul className="list-disc pl-8 text-lg text-gray-700 space-y-3">
        <li>
          <span className="font-semibold text-green-900">1967:</span> Início do trabalho evangelístico na Rua da Mata, sob a responsabilidade da 1ª IPG, com o trabalho do Evangelista Carlito Pereira.
        </li>
        <li>
          <span className="font-semibold text-green-900">1968:</span> O trabalho se torna uma congregação.
        </li>
        <li>
          <span className="font-semibold text-green-900">1969:</span> O Evangelista Daniel Barbosa atua na congregação.
        </li>
        <li>
          <span className="font-semibold text-green-900">5 de Março de 1994:</span> A congregação é oficialmente organizada como a Segunda Igreja Presbiteriana de Gurupi (2ª IPG).
        </li>
      </ul>

      {/* ---------------------------------------------------------------- */}
      {/* SEÇÃO 2: IDENTIDADE E DOUTRINA */}
      {/* ---------------------------------------------------------------- */}
      <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4 border-l-4 border-green-500 pl-3">
        Identidade e Doutrina
      </h2>
      
      {/* LISTA DE TÓPICOS DOUTRINÁRIOS */}
      <ul className="list-disc pl-8 text-lg text-gray-700 space-y-3">
        <li>
          <span className="font-semibold text-green-900">Igreja Reformada:</span> A 2ª IPG segue a tradição teológica reformada, que remonta ao trabalho de João Calvino no século XVI.
        </li>
        <li>
          <span className="font-semibold text-green-900">Confessional:</span> A igreja subscreve os símbolos de fé presbiterianos, como o Catecismo, o Breve Catecismo e a Confissão de Fé de Westminster.
        </li>
        <li>
          <span className="font-semibold text-green-900">Bíblia como Regra de Fé:</span> A Bíblia (Velho e Novo Testamentos) é a única regra de fé e prática para a igreja, que adota a sua Constituição.
        </li>
        <li>
          <span className="font-semibold text-green-900">Salvação pela Fé:</span> A salvação é entendida como um dom gratuito de Deus, recebido exclusivamente pela fé na obra e sacrifício de Jesus Cristo.
        </li>
        <li>
          <span className="font-semibold text-green-900">Aliança:</span> A igreja pratica o batismo de crentes arrependidos de seus pecados e de seus filhos, com base na Aliança de Deus com os crentes e seus filhos.
        </li>
        <li>
          <span className="font-semibold text-green-900">Doutrina da Soberania:</span> A doutrina da soberania de Deus é um tema central na convicção presbiteriana, influenciando todas as outras doutrinas.
        </li>
      </ul>

      {/* ---------------------------------------------------------------- */}
      {/* SEÇÃO 3: ESTRUTURA E ATIVIDADES */}
      {/* ---------------------------------------------------------------- */}
      <h2 className="text-3xl font-bold text-green-800 mt-10 mb-4 border-l-4 border-green-500 pl-3">
        Estrutura e Atividades
      </h2>

      {/* LISTA DE ESTRUTURA */}
      <ul className="list-disc pl-8 text-lg text-gray-700 space-y-3">
        <li>
          <span className="font-semibold text-green-900">Federação:</span> A igreja é federada ao Presbitério Sul do Tocantins (PSTS), parte da Igreja Presbiteriana do Brasil (IPB).
        </li>
        <li>
          <span className="font-semibold text-green-900">Ênfase:</span> A 2ª IPG busca a adoração a Deus, a comunhão entre os irmãos e a exposição da Palavra para ser uma comunidade cristã.
        </li>
      </ul>
      
      {/* ---------------------------------------------------------------- */}
      {/* MISSÃO E VISÃO (Mantendo o estilo original) */}
      {/* ---------------------------------------------------------------- */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <p className="text-lg text-green-900 font-semibold mb-2">
          Nossa missão é glorificar a Deus, edificar os crentes e evangelizar nossa cidade.
        </p>
        <p className="text-md text-gray-600">
          A Bíblia é a nossa única regra de fé e prática. Seguimos a tradição reformada,
          centrados em Cristo, fundamentados na Palavra e guiados pelo Espírito Santo.
        </p>
      </div>
      
    </section>
  )
}