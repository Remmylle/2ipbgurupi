'use client'; 

import React, { useState, useCallback, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br'; 

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

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
          start,
          end,
          allDay: false,
          resource: detail.type,
        });
      }
    }
  }

  return events;
};

const generateMonthlyEvents = (
  eventDetails: { title: string, weekday: number, occurrence: number, startTime: string, endTime: string, type: string }[],
  startDate: Date,
  durationInMonths: number = 12
) => {
  const events = [];
  const [startYear, startMonth] = [moment(startDate).year(), moment(startDate).month()];
    
  for (let m = 0; m < durationInMonths; m++) {
    const targetMoment = moment([startYear, startMonth]).add(m, 'months');
    const targetMonth = targetMoment.month();
    const targetYear = targetMoment.year();

    for (const detail of eventDetails) {
      let dayCount = 0;
      const targetDay = moment([targetYear, targetMonth, 1]); // agora é const ✅

      while (targetDay.month() === targetMonth) {
        if (targetDay.day() === detail.weekday) {
          dayCount++;
          if (dayCount === detail.occurrence) {
            const [startHour, startMinute] = detail.startTime.split(':').map(Number);
            const [endHour, endMinute] = detail.endTime.split(':').map(Number);

            const start = targetDay.clone().hour(startHour).minute(startMinute).toDate();
            const end = targetDay.clone().hour(endHour).minute(endMinute).toDate();

            if (start.getTime() >= new Date().getTime() - (24 * 60 * 60 * 1000)) {
              events.push({
                title: detail.title,
                start,
                end,
                allDay: false,
                resource: detail.type,
              });
            }
            break;
          }
        }
        targetDay.add(1, 'days'); 
      }
    }
  }
  return events;
};

// Eventos
const monthlySchedule = [
  { title: 'Ceia do Senhor', weekday: 0, occurrence: 1, startTime: '19:00', endTime: '20:30', type: 'Sacramento' },
];
const monthlyEvents = generateMonthlyEvents(monthlySchedule, new Date(), 12);

const recurringSchedule = [
  { title: 'Estudo Bíblico', dayOfWeek: 3, startTime: '19:30', endTime: '20:30', type: 'Culto' },
  { title: 'Culto nos Lares', dayOfWeek: 5, startTime: '19:30', endTime: '20:30', type: 'Culto' },
  { title: 'EBD', dayOfWeek: 0, startTime: '09:00', endTime: '10:30', type: 'Culto' },
  { title: 'Culto Solene', dayOfWeek: 0, startTime: '19:00', endTime: '20:30', type: 'Culto' },
];
const recurrentEvents = generateRecurringEvents(recurringSchedule, new Date(), 52);

const EXCLUSION_DATES: { date: string; title: string }[] = [
  { date: '2025-10-10', title: 'Culto nos Lares' }, 
  { date: '2025-10-05', title: 'Culto Solene' }, 
  { date: '2025-11-02', title: 'Culto Solene' }, 
];

const filteredRecurrentEvents = recurrentEvents.filter(event => {
  const eventDateStr = moment(event.start).format('YYYY-MM-DD');
  return !EXCLUSION_DATES.some(exclusion => 
    exclusion.date === eventDateStr && exclusion.title === event.title
  );
});

const specialEvents = [
  {
    title: 'Festa da Igreja',
    start: new Date(2025, 9, 9, 18, 0), 
    end: new Date(2025, 9, 12, 22, 0), 
    allDay: false, 
  },
  {
    title: 'Batismo',
    start: new Date(2025, 10, 16, 17, 0), 
    end: new Date(2025, 10, 16, 18, 0),
    allDay: false,
  },
];

const myEventsList = [...monthlyEvents, ...filteredRecurrentEvents, ...specialEvents];

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
