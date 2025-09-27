export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Segunda Igreja Presbiteriana de Gurupi - TO.
        <br />
        <span className="text-gray-300">
          A Bíblia é a nossa única regra de fé e prática.
        </span>
      </div>
    </footer>
  );
}
