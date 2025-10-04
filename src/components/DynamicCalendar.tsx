// src/components/DynamicCalendar.tsx

import dynamic from 'next/dynamic';

// 🛑 Este componente agora tem a responsabilidade de ser o "import dinâmico"
// e será importado na sua página Server Component (eventos/page.tsx).

const DynamicCalendar = dynamic(() => import('./CalendarWrapper'), { 
    ssr: false 
});

export default DynamicCalendar;