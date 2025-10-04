// src/app/contato/page.tsx

"use client"; // Importante: Hooks exigem 'use client'

import React, { useState, FormEvent } from "react";

export default function ContatoPage() {
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.1564965774471!2d-49.057860770076395!3d-11.729505044021687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933e956d9b91bc4d%3A0xb019ed887822295!2s2%20Igreja%20Presbiteriana%20de%20Gurupi!5e0!3m2!1spt-BR!2sbr!4v1758941502708!5m2!1spt-BR!2sbr";

  // 1. Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  // 2. Estado para feedback do usuário
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  // 3. Manipular inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Envio do formulário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("Enviando mensagem...");

    // Validação simples
    const requiredFields = ["nome", "sobrenome", "email", "assunto", "mensagem"];
    const isInvalid = requiredFields.some(
      (field) => !formData[field as keyof typeof formData].trim()
    );

    if (isInvalid) {
      setStatus("error");
      setMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Mensagem enviada com sucesso! Em breve entraremos em contato."
        );
        setFormData({
          nome: "",
          sobrenome: "",
          email: "",
          assunto: "",
          mensagem: "",
        });
      } else {
        setStatus("error");
        setMessage(
          "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde."
        );
      }
    } catch {
      setStatus("error");
      setMessage("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  };

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Contato</h1>
      <p className="text-lg text-gray-700 mb-6">
        Ficaremos felizes em receber sua visita, mensagem ou pedido de oração!
      </p>

      {/* Detalhes de Contato */}
      <div className="space-y-4 mb-12">
        <p>
          <strong>Endereço:</strong> R. Delfino Águiar, n° 1428 - Centro, Gurupi
          - TO, 77405-040
        </p>
        <p>
          <strong>Telefone:</strong> (63) 99999-9999
        </p>
        <p>
          <strong>Email:</strong> contato@igreja.com
        </p>
      </div>

      {/* Formulário */}
      <div className="bg-white shadow-xl p-6 rounded-xl mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6 border-b pb-2">
          Envie Sua Mensagem ou Sugestão
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nome e Sobrenome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700"
              >
                Nome*
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 h-10 px-3 border"
              />
            </div>
            <div>
              <label
                htmlFor="sobrenome"
                className="block text-sm font-medium text-gray-700"
              >
                Sobrenome*
              </label>
              <input
                type="text"
                name="sobrenome"
                id="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 h-10 px-3 border"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 h-10 px-3 border"
            />
          </div>

          {/* Assunto */}
          <div>
            <label
              htmlFor="assunto"
              className="block text-sm font-medium text-gray-700"
            >
              Assunto*
            </label>
            <input
              type="text"
              name="assunto"
              id="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 h-10 px-3 border"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem*
            </label>
            <textarea
              name="mensagem"
              id="mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-3 border"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              status === "loading"
                ? "bg-green-600 opacity-70 cursor-not-allowed"
                : "bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            } transition-all`}
          >
            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>

        {/* Feedback */}
        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {/* Google Maps */}
      <div className="mt-8">
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="350"
          className="rounded-xl shadow-md"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Segunda Igreja Presbiteriana de Gurupi"
        ></iframe>
      </div>
    </section>
  );
}
