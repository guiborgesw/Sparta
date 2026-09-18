import styles from './Calendar.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

export default function CalendarTracker() {

    const [markedDays, setMarkedDays] = useState({});

    function handleDay(date) {
        const key = toKey(date.getFullYear(), date.getMonth(), date.getDate());

        setMarkedDays(prev => {
            const updated = { ...prev, [key]: !prev[key] };
            console.log(updated)
            return updated;
        });
    }

    function toKey(year, month, day) {
        return (
            `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
        )
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