// src/app/fotos/page.tsx

//import Image from 'next/image';
import PhotoSlider from '@/components/PhotoSlider'; 
// OBS: Certifique-se de que PhotoSlider.tsx está em src/components/

// ------------------------------------------------------------------
// 🛑 1. DEFINIÇÃO DAS FOTOS PARA CADA CARROSSEL
// ------------------------------------------------------------------

// QUADRO 1: Culto de Domingo
const cultoFotos = [
  { src: '/galeria/culto-1.jpg', alt: 'Culto de domingo (Foto 1)' },
  { src: '/galeria/culto-2.jpg', alt: 'Culto de domingo (Foto 2)' },
  { src: '/galeria/culto-3.jpg', alt: 'Culto de domingo (Foto 3)' },
  // ... (Adicione todas as 10+ fotos do Culto aqui)
];

// QUADRO 2: Encontro de Jovens
const jovensFotos = [
  { src: '/galeria/evento-jovens-1.jpg', alt: 'Encontro de jovens (1)' },
  { src: '/galeria/evento-jovens-2.jpg', alt: 'Encontro de jovens (2)' },
  { src: '/galeria/evento-jovens-3.jpg', alt: 'Encontro de jovens (2)' },
  { src: '/galeria/evento-jovens-4.jpg', alt: 'Encontro de jovens (2)' },
  // Adicione aqui as fotos do Encontro de Jovens
];

// QUADRO 3: Trabalho Missionário
const missoesFotos = [
  { src: '/galeria/missoes-1.jpg', alt: 'Trabalho missionário (1)' },
  { src: '/galeria/missoes-2.jpg', alt: 'Trabalho missionário (2)' },
  { src: '/galeria/missoes-3.jpg', alt: 'Trabalho missionário (3)' },
  { src: '/galeria/missoes-4.jpg', alt: 'Trabalho missionário (4)' },
  // Adicione aqui as fotos do Trabalho Missionário
];

// QUADRO 4: Fachada e Prédio da Igreja
const fachadaFotos = [
  { src: '/galeria/predio-igreja-1.jpg', alt: 'Fachada da igreja (1)' },
  { src: '/galeria/predio-igreja-2.jpg', alt: 'Fachada da igreja (2)' },
  { src: '/galeria/predio-igreja-3.jpg', alt: 'Fachada da igreja (3)' },
  { src: '/galeria/predio-igreja-4.jpg', alt: 'Fachada da igreja (4)' },
  // Adicione aqui fotos da Fachada/Prédio
];


// Array principal que define a estrutura da galeria. 
// Cada item é um Carrossel.
const photoSections = [
    { title: 'Culto de Domingo', photos: cultoFotos },
    { title: 'Encontro de Jovens', photos: jovensFotos },
    { title: 'Trabalho Missionário', photos: missoesFotos },
    { title: 'Fachada da Igreja', photos: fachadaFotos },
    // 🛑 ADICIONE MAIS QUADROS AQUI (Ex: "Batismos", "Festa da Colheita")
];


export default function FotosPage() {
  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 border-b pb-2">
        Nossa Galeria de Eventos
      </h1>

      {/* 🛑 2. ESTRUTURA GRID QUE RENDERIZA OS CARROSSEIS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {photoSections.map((section, index) => (
            <div 
                key={index} 
                className="w-full h-64 overflow-hidden rounded-lg shadow-xl 
                           border-2 border-gray-100 relative group"
            >
                {/* O Carrossel é o conteúdo principal */}
                <PhotoSlider photos={section.photos} />
                
                {/* Legenda Fixa no Fundo */}
                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white p-2 text-sm font-bold">
                    {section.title} (Veja {section.photos.length} Fotos)
                </div>
            </div>
        ))}

      </div>
      
      {/* Mensagem se não houver fotos */}
      {photoSections.length === 0 && (
        <p className="text-gray-500 text-lg mt-10">Ainda estamos preparando nossa galeria de fotos. Volte em breve!</p>
      )}

    </div>
  );
}