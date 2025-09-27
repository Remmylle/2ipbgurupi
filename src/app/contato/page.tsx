import React from 'react';

export default function ContatoPage() {
  
  // A URL de incorporação (embed) do Google Maps, fornecida por você:
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.1564965774471!2d-49.057860770076395!3d-11.729505044021687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933e956d9b91bc4d%3A0xb019ed887822295!2s2%20Igreja%20Presbiteriana%20de%20Gurupi!5e0!3m2!1spt-BR!2sbr!4v1758941502708!5m2!1spt-BR!2sbr";

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Contato</h1>
      <p className="text-lg text-gray-700 mb-6">
        Ficaremos felizes em receber sua visita ou mensagem!
      </p>

      {/* Detalhes de Contato */}
      <div className="space-y-4">
        {/* Lembre-se de atualizar estes dados com os reais da igreja */}
        <p><strong>Endereço:</strong> R. Delfino Águiar, n° 1428 - Centro, Gurupi - TO, 77405-040</p>
        <p><strong>Telefone:</strong> (63) 99999-9999</p>
        <p><strong>Email:</strong> contato@igreja.com</p>
      </div>

      {/* Mapa do Google Maps Incorporado */}
      <div className="mt-8">
        <iframe
          // A URL real do mapa com a localização exata:
          src={googleMapsEmbedUrl} 
          
          // Ajustes de estilo para preencher a largura e manter a altura:
          width="100%"
          height="350"
          
          // Classes Tailwind e atributos do iframe:
          className="rounded-xl shadow-md"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Segunda Igreja Presbiteriana de Gurupi"
        ></iframe>
      </div>
    </section>
  )
}