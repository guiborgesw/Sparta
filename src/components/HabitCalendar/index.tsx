import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import  './HabitCalendar.module.css';
import { useState } from "react";

import type { HabitMarks } from '../../@types/habits'
import { toKey } from '../../utils/date';

export default function HabitCalendar() {

    const [markedDays, setMarkedDays] = useState<HabitMarks>([]);

    function handleDay(date: Date) {    
        const key = toKey(date.getFullYear(), date.getMonth(), date.getDate());

        setMarkedDays(prev => {
            const updated = [...prev];
            return updated;
        });
    }

    return (
        <section >
            <div>
                <Calendar
                    locale="pt-BR"
                    onClickDay={handleDay}
                    tileClassName={({ date }) => {
                        const key = toKey(date.getFullYear(), date.getMonth(), date.getDate())
                        return markedDays[key] ? "highlightDay" : null;
                    }}
                    maxDate={new Date()}
                />
            </div>
        </section>
    )
}
