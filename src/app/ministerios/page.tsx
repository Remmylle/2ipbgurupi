// src/app/ministerios/page.tsx

import Image from 'next/image';
import Link from 'next/link';

const sociedades = [
   { 
    name: "UCP - Crianças", 
    logoSrc: "/sociedades/logo_ucp.jpg",
    links: [
      { name: "Nosso Instagram", href: "https://www.instagram.com/ucp_2igreja/", style: "bg-pink-600 hover:bg-pink-700" },
      { name: "Sobre a UCP", href: "https://www.ipb.org.br/secretarias-trabalho-da-infancia.php", style: "bg-blue-600 hover:bg-blue-700" },
      { name: "UCP Oficial", href: "https://www.ipb.org.br/secretarias-trabalho-da-infancia.php", style: "bg-green-700 hover:bg-green-800" },
    ],
  }, 
  { 
    name: "UAP - Adolescentes", 
    logoSrc: "/sociedades/logo_upa.jpg",
    links: [
      { name: "Nosso Instagram", href: "https://www.instagram.com/upa_gurupi/", style: "bg-pink-600 hover:bg-pink-700" },
      { name: "Sobre a UAP", href: "https://www.ipb.org.br/secretarias-trabalho-com-adolescentes.php", style: "bg-blue-600 hover:bg-blue-700" },
      { name: "UAP Oficial", href: "https://upa.org.br/", style: "bg-green-700 hover:bg-green-800" },
    ],
  }, 
  { 
    name: "UMP - Jovens", 
    logoSrc: "/sociedades/logo_ump.jpg",
    links: [
      { name: "Nosso Instagram", href: "https://www.instagram.com/umpdasegundagpi/", style: "bg-pink-600 hover:bg-pink-700" },
      { name: "Sobre a UMP", href: "https://www.ipb.org.br/secretarias-trabalho-com-mocidade.php", style: "bg-blue-600 hover:bg-blue-700" },
      { name: "UMP Oficial", href: "https://ump.org.br/", style: "bg-green-700 hover:bg-green-800" },
    ],
  }, 
  { 
    name: "SAF - Mulheres", 
    logoSrc: "/sociedades/logo_saf.jpg",
    links: [
      { name: "Nosso Instagram", href: "https://www.instagram.com/2ipbgurupi/", style: "bg-pink-600 hover:bg-pink-700" }, 
      { name: "Sobre a SAF", href: "https://www.ipb.org.br/secretarias-trabalho-feminino.php", style: "bg-blue-600 hover:bg-blue-700" },
      { name: "SAF Oficial", href: "https://www.saf.org.br/", style: "bg-green-700 hover:bg-green-800" },
    ],
  }, 
  { 
    name: "UPH - Homens", 
    logoSrc: "/sociedades/logo_uph.jpg",
    links: [
      { name: "Nosso Instagram", href: "https://www.instagram.com/2ipbgurupi/", style: "bg-pink-600 hover:bg-pink-700" }, 
      { name: "Sobre a UPH", href: "https://www.ipb.org.br/secretarias-trabalho-masculino.php", style: "bg-blue-600 hover:bg-blue-700" },
      { name: "UPH Oficial", href: "https://www.uph.org.br/", style: "bg-green-700 hover:bg-green-800" },
    ],
  }, 
];

export default function MinisteriosPage() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4">
      
      <h1 className="text-4xl font-bold text-green-900 mb-12 text-center">Nossas Sociedades</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
        {sociedades.map((item, i) => (
          
          <div 
            key={i} 
            className="bg-white rounded-2xl shadow-xl p-8 text-center 
                       border-t-4 border-green-700 
                       hover:shadow-2xl hover:scale-[1.03] transition duration-300 flex flex-col justify-start"
          >
            {/* 🛑 MANTER O LOGO NO TOPO */}
            <div className="mx-auto mb-6 w-24 h-24 relative">
                <Image
                    src={item.logoSrc}
                    alt={`Logo da ${item.name}`}
                    fill
                    className="object-contain"
                    sizes="96px"
                />
            </div>

            <h4 className="text-2xl font-bold text-green-900 mb-6">{item.name}</h4>

            {/* 🛑 INSERIR BOTÕES LOGO ABAIXO DO TÍTULO */}
            <div className="flex flex-col space-y-3 mt-auto pt-4 border-t border-gray-100">
                {item.links.map((link, linkIndex) => (
                    <Link
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md ${link.style}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            {/* FIM DOS BOTÕES */}

          </div>
        ))}
      </div>
    </section>
  )
}