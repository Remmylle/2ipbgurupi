// src/components/CalendarWrapper.tsx
'use client'; 

import React, { useState, useCallback, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br'; 

// -----------------------------------------------------------
// CONFIGURAÇÃO DE LOCALIZAÇÃO (MOMENT)
// -----------------------------------------------------------
moment.locale('pt-br');
const localizer = momentLocalizer(moment);

// -----------------------------------------------------------
// 🛑 FUNÇÃO PARA GERAR EVENTOS RECORRENTES SEMANAIS
// -----------------------------------------------------------
const generateRecurringEvents = (
  eventDetails: { title: string, dayOfWeek: number, startTime: string, endTime: string, type: string }[],
  startDate: Date,
  durationInWeeks: number = 52
) => {
  const events = [];
  
  const startMoment = moment(startDate).startOf('week'); 

  for (let w = 0; w < durationInWeeks; w++) {
    const weekStart = startMoment.clone().add(w, 'weeks');

    for (const detail of eventDetails) {
      const eventDate = weekStart.clone().day(detail.dayOfWeek);

      const [startHour, startMinute] = detail.startTime.split(':').map(Number);
      const [endHour, endMinute] = detail.endTime.split(':').map(Number);

      const start = eventDate.clone().hour(startHour).minute(startMinute).toDate();
      const end = eventDate.clone().hour(endHour).minute(endMinute).toDate();

      if (start.getTime() >= new Date().getTime() - (24 * 60 * 60 * 1000)) {
         events.push({
            title: detail.title,
            start: start,
            end: end,
            allDay: false,
            resource: detail.type,
         });
      }
    }
  }

  return events;
};


// -----------------------------------------------------------
// 🛑 NOVO: FUNÇÃO PARA GERAR EVENTOS RECORRENTES MENSAIS
// -----------------------------------------------------------
const generateMonthlyEvents = (
  eventDetails: { title: string, weekday: number, occurrence: number, startTime: string, endTime: string, type: string }[],
  startDate: Date,
  durationInMonths: number = 12
) => {
    const events = [];
    const [startYear, startMonth] = [moment(startDate).year(), moment(startDate).month()];
    
    // Itera por um número definido de meses a partir da data atual
    for (let m = 0; m < durationInMonths; m++) {
        const targetMoment = moment([startYear, startMonth]).add(m, 'months');
        const targetMonth = targetMoment.month();
        const targetYear = targetMoment.year();

        for (const detail of eventDetails) {
            
            // Encontra o dia da semana correto (0=Dom, 1=Seg, etc.)
            let dayCount = 0;
            let targetDay = moment([targetYear, targetMonth, 1]); // Começa no primeiro dia do mês

            while (targetDay.month() === targetMonth) {
                if (targetDay.day() === detail.weekday) {
                    dayCount++;
                    
                    // Verifica se chegamos na N-ésima ocorrência (1º, 2º, etc.)
                    if (dayCount === detail.occurrence) {
                        const [startHour, startMinute] = detail.startTime.split(':').map(Number);
                        const [endHour, endMinute] = detail.endTime.split(':').map(Number);

                        const start = targetDay.clone().hour(startHour).minute(startMinute).toDate();
                        const end = targetDay.clone().hour(endHour).minute(endMinute).toDate();

                        if (start.getTime() >= new Date().getTime() - (24 * 60 * 60 * 1000)) {
                            events.push({
                                title: detail.title,
                                start: start,
                                end: end,
                                allDay: false,
                                resource: detail.type,
                            });
                        }
                        break; // Sai do loop 'while' e vai para o próximo evento
                    }
                }
                targetDay.add(1, 'days'); // Avança para o próximo dia
            }
        }
    }
    return events;
};


// -----------------------------------------------------------
// 🛑 CONFIGURAÇÃO DOS EVENTOS MENSAIS, RECORRENTES E ESPECIAIS
// -----------------------------------------------------------

// 🛑 EVENTOS MENSAIS (Primeiro Domingo de Cada Mês)
const monthlySchedule = [
    // weekday: 0 (Domingo), occurrence: 1 (Primeira ocorrência do mês)
    { title: 'Ceia do Senhor', weekday: 0, occurrence: 1, startTime: '19:00', endTime: '20:30', type: 'Sacramento' },
];

const monthlyEvents = generateMonthlyEvents(monthlySchedule, new Date(), 12);


// 🛑 EVENTOS SEMANAIS RECORRENTES:
const recurringSchedule = [
    { title: 'Estudo Bíblico', dayOfWeek: 3, startTime: '19:30', endTime: '20:30', type: 'Culto' }, // Quarta-feira
    { title: 'Culto nos Lares', dayOfWeek: 5, startTime: '19:30', endTime: '20:30', type: 'Culto' }, // Sexta-feira
    { title: 'EBD', dayOfWeek: 0, startTime: '09:00', endTime: '10:30', type: 'Culto' }, // Domingo Manhã
    { title: 'Culto Solene', dayOfWeek: 0, startTime: '19:00', endTime: '20:30', type: 'Culto' }, // Domingo Noite
];

const recurrentEvents = generateRecurringEvents(recurringSchedule, new Date(), 52);


// 🛑 LISTA DE EXCLUSÕES
const EXCLUSION_DATES: { date: string; title: string }[] = [
    // Culto nos Lares não deve acontecer na Sexta da Festa: 10 de Outubro de 2025
    { date: '2025-10-10', title: 'Culto nos Lares' }, 
    
    // 🛑 EXCLUSÃO NECESSÁRIA: O Culto Solene Padrão não ocorre na noite da Ceia.
    // O evento Ceia do Senhor (mensal) substitui o Culto Solene (semanal).
    // As datas são calculadas automaticamente pela função generateMonthlyEvents. 
    // Em 2025-10-05, o Culto Solene (19:00) deve ser excluído, pois a Ceia (19:00) acontece.
    // Como a Ceia tem um TÍTULO diferente, o filtro automático não funciona.
    // Vamos adicionar manualmente a exclusão para evitar eventos duplicados no mesmo horário.
    { date: '2025-10-05', title: 'Culto Solene' }, 
    { date: '2025-11-02', title: 'Culto Solene' }, 
    // ... adicione outras datas de ceia/culto solene para o ano ...
];

// Filtra os eventos recorrentes para remover as exclusões
const filteredRecurrentEvents = recurrentEvents.filter(event => {
  const eventDateStr = moment(event.start).format('YYYY-MM-DD');
  
  return !EXCLUSION_DATES.some(exclusion => 
    exclusion.date === eventDateStr && exclusion.title === event.title
  );
});


// 🛑 EVENTOS ÚNICOS/ESPECIAIS:
const specialEvents = [
  // Festa da Igreja (09 a 12 de Outubro de 2025)
  {
    title: 'Festa da Igreja',
    start: new Date(2025, 9, 9, 18, 0), 
    end: new Date(2025, 9, 12, 22, 0), 
    allDay: false, 
  },
  // Batismo (16 de Novembro)
  {
    title: 'Batismo',
    start: new Date(2025, 10, 16, 17, 0), 
    end: new Date(2025, 10, 16, 18, 0),
    allDay: false,
  },
];


// Combina TODAS as listas: Mensais, Recorrentes Filtrados e Especiais
const myEventsList = [...monthlyEvents, ...filteredRecurrentEvents, ...specialEvents];


// -----------------------------------------------------------
// COMPONENTE PRINCIPAL COM GERENCIAMENTO DE ESTADO
// -----------------------------------------------------------
export default function CalendarWrapper() {
  
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNavigate = useCallback(
    (newDate: Date) => setCurrentDate(newDate),
    []
  );
  
  const events = useMemo(() => myEventsList, []); 

  return (
    <Calendar
      localizer={localizer}
      events={events} 
      defaultView="month" 
      
      date={currentDate} 
      onNavigate={handleNavigate} 

      messages={{
        next: 'Próximo',
        previous: 'Anterior',
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        agenda: 'Lista',
        showMore: (total: number) => `+ Ver mais (${total})`,
      }}
      
      startAccessor="start"
      endAccessor="end"
      style={{ height: '100%' }}
    />
  );
}