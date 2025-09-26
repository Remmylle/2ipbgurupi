export default function MinisteriosPage() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-green-900 mb-12 text-center">Nossos Ministérios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Infantil", desc: "Ensino bíblico e discipulado para crianças." },
          { name: "Jovens", desc: "Comunhão, louvor e estudo da Palavra para jovens." },
          { name: "Mulheres", desc: "Momentos de oração e edificação para mulheres." },
          { name: "Homens", desc: "Fortalecimento espiritual e comunhão entre homens." },
          { name: "Música", desc: "Louvor congregacional e adoração a Deus." },
          { name: "Ação Social", desc: "Projetos de ajuda e evangelização." },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h4 className="text-xl font-semibold text-green-900 mb-2">{item.name}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
