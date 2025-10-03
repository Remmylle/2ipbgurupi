export default function EventosPage() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-green-900 mb-12 text-center">Próximos Eventos</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-semibold text-green-900">Culto de Domingo</h4>
          <p className="text-gray-600">Escola Biblica Dominial domingo às 09h</p>
          <p className="text-gray-600">Culto Solene às 19h</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-semibold text-green-900">Estudo Bíblico</h4>
          <p className="text-gray-600">Quartas às 19:30h</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-semibold text-green-900">Culto nos Lares</h4>
          <p className="text-gray-600">Sexta às 19:00h</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h4 className="text-2xl font-semibold text-green-900">Encontro de Jovens</h4>
          <p className="text-gray-600">Sábados às 19h</p>
        </div>
      </div>
    </section>
  )
}
