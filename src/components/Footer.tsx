// src/components/Footer.tsx

import { FaYoutube, FaInstagram } from 'react-icons/fa'; // Assumindo que você já instalou react-icons

export default function Footer() {
  const youtubeUrl = "https://www.youtube.com/@segundaigrejapresbiteriana8600";
  const instagramUrl = "https://www.instagram.com/2ipbgurupi/";
  
  return (
    // REMOVIDO: mt-10 (margin-top) para que o footer cole no conteúdo
    <footer className="bg-green-900 text-white py-6"> 
      <div className="container mx-auto text-center text-sm px-4">
        
        {/* Contêiner Principal para Nome e Ícones */}
        <div className="flex flex-col items-center justify-center space-y-2">
            
          {/* Nome da Igreja */}
          <p className="text-base font-semibold">
            © {new Date().getFullYear()} Segunda Igreja Presbiteriana de Gurupi - TO
          </p>

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