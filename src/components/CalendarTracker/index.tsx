import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import  './Calendar.css';
import { useState } from "react";

import type { MarkedDays } from '../../@types/habits'
import { toKey } from '../../utils/date';

export default function CalendarTracker() {

    const [markedDays, setMarkedDays] = useState<MarkedDays>({});

    function handleDay(date: Date) {    
        const key = toKey(date.getFullYear(), date.getMonth(), date.getDate());

        setMarkedDays(prev => {
            const updated = { ...prev, [key]: !prev[key] };
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