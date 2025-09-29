// src/components/Footer.tsx

import { FaYoutube, FaInstagram } from 'react-icons/fa'; // Assumindo que você já instalou react-icons
import Image from "next/image"; // 🛑 IMPORTANTE: Importar o componente Image

export default function Footer() {
  const youtubeUrl = "https://www.youtube.com/@segundaigrejapresbiteriana8600";
  const instagramUrl = "https://www.instagram.com/2ipbgurupi/";
  
  return (
    // REMOVIDO: mt-10 (margin-top) para que o footer cole no conteúdo
    <footer className="bg-green-900 text-white py-6"> 
      <div className="container mx-auto text-center text-sm px-4">
        
        {/* Contêiner Principal para Nome e Ícones */}
        <div className="flex flex-col items-center justify-center space-y-2">
            
          {/* 🛑 NOVO: Logo e Nome da Igreja em linha */}
          {/* Usamos 'flex' e 'items-center' para colocar a imagem e o texto lado a lado e centralizados. */}
          <div className="flex items-center space-x-2 text-base font-semibold">
              
            {/* Símbolo da Igreja (Logo) */}
            <div className="relative w-6 h-6"> 
                <Image
                    src="/logo.png" // 🛑 Caminho da imagem (deve estar em /public)
                    alt="Símbolo da Igreja"
                    fill
                    className="object-contain"
                    sizes="24px"
                />
            </div>

            {/* Nome da Igreja */}
            <p>
              © {new Date().getFullYear()} Segunda Igreja Presbiteriana de Gurupi - TO
            </p>
          </div>

          {/* Ícones de Mídia Social */}
          <div className="flex space-x-5 text-2xl mt-2">
            
            {/* Ícone do YouTube */}
            <a 
              href={youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube da Igreja"
              className="hover:text-red-500 transition-colors"
            >
              <FaYoutube />
            </a>

            {/* Ícone do Instagram */}
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram da Igreja"
              className="hover:text-pink-600 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
}