export default function ContatoPage() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Contato</h1>
      <p className="text-lg text-gray-700 mb-6">
        Ficaremos felizes em receber sua visita ou mensagem!
      </p>

      <div className="space-y-4">
        <p><strong>Endereço:</strong> Rua Exemplo, 123 - Gurupi - TO</p>
        <p><strong>Telefone:</strong> (63) 99999-9999</p>
        <p><strong>Email:</strong> contato@igreja.com</p>
      </div>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="350"
          className="rounded-xl shadow-md"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
