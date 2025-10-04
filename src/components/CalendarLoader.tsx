// src/components/CalendarLoader.tsx
'use client'; 

import dynamic from 'next/dynamic';

// 🛑 A declaração dynamic com ssr: false agora está dentro 
// de um componente que é explicitamente um Client Component.

const CalendarWrapper = dynamic(() => import('./CalendarWrapper'), { 
    ssr: false,
    loading: () => <div className="h-full flex items-center justify-center text-lg text-gray-500">Carregando Calendário...</div>
});

export default function CalendarLoader() {
    return <CalendarWrapper />;
}