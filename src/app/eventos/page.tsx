// src/app/eventos/page.tsx

import React from 'react';
// 🛑 Importa o Loader que já encapsula o dynamic(..., { ssr: false })
import CalendarLoader from '../../components/CalendarLoader'; 


export default function EventosPage() {
  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-green-900 mb-8 border-b pb-2 text-center">
        Agenda de Eventos
      </h1>

      {/* 🛑 Usando o CalendarLoader simples */}
      <div className="h-[700px] bg-white p-6 rounded-xl shadow-2xl">
        <CalendarLoader />
      </div>
      
    </div>
  );
}