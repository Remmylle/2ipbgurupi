import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/igreja.jpg"
          alt="Foto da Igreja"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Segunda Igreja Presbiteriana de Gurupi - TO
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl">
            A Bíblia é a nossa única regra de fé e prática
          </p>
        </div>
      </div>

      {/* Conteúdo abaixo */}
      <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-2">
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Seja Bem-vindo!</h2>
          <p>
            Estamos felizes em receber você. Aqui a Palavra de Deus é central em
            tudo o que fazemos.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Nossos Cultos</h2>
          <p>
            Participe dos cultos e ministérios da nossa igreja. Todos são
            convidados a estar conosco!
          </p>
        </div>
      </div>
    </section>
  );
}
