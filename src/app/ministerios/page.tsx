// src/components/MinisteriosPage.tsx (ou src/app/ministerios/page.tsx)

import Image from 'next/image'; // 🛑 IMPORTAR O COMPONENTE IMAGE

export default function MinisteriosPage() {
  return (
    // py-24 para garantir o espaçamento abaixo do Navbar fixo
    <section className="py-24 max-w-6xl mx-auto px-4">
      
      <h1 className="text-4xl font-bold text-green-900 mb-12 text-center">Nossas Sociedades</h1>

      {/* Ajustei o Grid para exibir 4 colunas no desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
        {[
          // 🛑 ADICIONANDO logoSrc
          { 
            name: "UAP - Adolescentes", 
            desc: "Programa de discipulado, estudo e atividades sociais para adolescentes.",
            logoSrc: "/sociedades/logo_upa.jpg" // 🛑 Caminho para o logo da UAP
          }, 
          { 
            name: "UMP - Jovens", 
            desc: "Comunhão, louvor e estudo da Palavra para jovens universitários e profissionais.",
            logoSrc: "/sociedades/logo_ump.jpg" // 🛑 Caminho para o logo da UMP (Assumindo logo_ump.png)
          }, 
          { 
            name: "SAF - Mulheres", 
            desc: "Momentos de oração, estudo e edificação para mulheres da igreja.",
            logoSrc: "/sociedades/logo_saf.jpg" // 🛑 Caminho para o logo da SAF
          }, 
          { 
            name: "UPH - Homens", 
            desc: "Fortalecimento espiritual, serviço e comunhão entre os homens.",
            logoSrc: "/sociedades/logo_uph.jpg" // 🛑 Caminho para o logo da UPH
          }, 
        ].map((item, i) => (
          
          <div 
            key={i} 
            className="bg-white rounded-2xl shadow-xl p-8 text-center 
                       border-t-4 border-green-700 
                       hover:shadow-2xl hover:scale-[1.03] transition duration-300"
          >
            {/* 🛑 NOVO: INSERÇÃO DA IMAGEM */}
            <div className="mx-auto mb-4 w-20 h-20 relative">
                <Image
                    src={item.logoSrc}
                    alt={`Logo da ${item.name}`}
                    fill
                    className="object-contain"
                    sizes="80px"
                />
            </div>
            {/* FIM DA INSERÇÃO DA IMAGEM */}

            <h4 className="text-2xl font-bold text-green-900 mb-2">{item.name}</h4>
            <p className="text-gray-600 mt-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}