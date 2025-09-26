export default function PregacoesPage() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-green-900 mb-12 text-center">Últimas Pregações</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[ 
          { title: "Pregação 1", video: "https://www.youtube.com/embed/ysz5S6PUM-U", date: "20/09/2025" },
          { title: "Pregação 2", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", date: "13/09/2025" },
          { title: "Pregação 3", video: "https://www.youtube.com/embed/ScMzIvxBSi4", date: "06/09/2025" }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={item.video}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-green-900">{item.title}</h4>
              <p className="text-gray-600 text-sm">Data: {item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
