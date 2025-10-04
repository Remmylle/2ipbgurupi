// src/app/pregacoes/page.tsx

/**
 * Converte um URL normal do YouTube (watch?v=ID ou youtu.be/ID)
 * para o formato de incorporação (embed/ID), incluindo o tratamento de timestamps.
 * @param url O URL original do YouTube.
 * @returns O URL pronto para ser inserido no atributo 'src' do iframe.
 */
const getEmbedUrl = (url: string): string => {
  let videoId = '';
  let timeStart = '';

  // 1. Extrai o ID do vídeo (funciona para youtu.be e watch?v=)
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split(/[?&]/)[0];
  } else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split(/[?&]/)[0];
  }

  // 2. Extrai o tempo de início (t=) e converte para o formato do embed (start=)
  const timeMatch = url.match(/[?&]t=(\d+)/);
  if (timeMatch && timeMatch[1]) {
    timeStart = `?start=${timeMatch[1]}`;
  }

  // 3. Constrói o URL de incorporação
  return `https://www.youtube.com/embed/${videoId}${timeStart}`;
};


export default function PregacoesPage() {

  // 🛑 NOVOS DADOS DE VÍDEOS COM OS LINKS FORNECIDOS
  const pregacoes = [ 
    { 
      title: "O que é o Evangelho?", 
      originalUrl: "https://youtu.be/fZ3PkOu24y0?t=6", 
      date: "20/09/2025" 
    },
    { 
      title: "Como ter paz no coração", 
      originalUrl: "https://youtu.be/a8eGNMoouIg", 
      date: "13/09/2025" 
    },
    { 
      title: "Como conhecer a vontade de Deus", 
      originalUrl: "https://youtu.be/EtL76ianQ34?t=1", 
      date: "06/09/2025" 
    }
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-green-900 mb-12 text-center"> Pregações</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pregacoes.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-green-700 hover:shadow-xl transition duration-300">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                // 🛑 Usa a função utilitária para garantir o URL de incorporação correto
                src={getEmbedUrl(item.originalUrl)}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-bold text-green-900 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">Data: {item.date}</p>
              {/* Link para o vídeo original para acessibilidade, se necessário */}
              <a 
                  href={item.originalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-green-700 hover:text-green-900 text-sm font-medium transition duration-300"
              >
                  Ver no YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}