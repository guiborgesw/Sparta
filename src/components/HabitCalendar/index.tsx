import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './HabitCalendar.css';
import { useState } from "react";

import type { Habit } from '../../@types/habits';
import { toKey } from '../../utils/date';
import { useHabits } from '../../context/HabitsContext';

export default function HabitCalendar() {
    const { habits, toggleMark, isDone } = useHabits()

    const [selectedHabitId, setSelectedHabitId] = useState('')
    const activeHabit: Habit | undefined = 
        habits.find(h => h.id === selectedHabitId) ?? habits[0]

    function handleDay(date: Date) { 
        if (!activeHabit) return
        
        const key = toKey(date.getFullYear(), date.getMonth(), date.getDate());
        toggleMark(activeHabit.id, key)
    }

    return (
        <section >
            <select 
                value={activeHabit?.id ?? ''}
                disabled={!activeHabit}
                onChange={(event) => setSelectedHabitId(event.target.value)}
            >
                {activeHabit ? (
                    habits.map((habit) => (
                        <option key={habit.id} value={habit.id}>
                            {habit.name}
                        </option>
                    ))
                ) : (
                    <option value="">Adicione um hábito para começar</option>
                )}
            </select>
            <div className={!activeHabit ? 'calendarDisabled' : undefined}>
                <Calendar
                    locale="pt-BR"
                    onClickDay={handleDay}
                    tileDisabled={() => !activeHabit}
                    tileClassName={({ date }) => {
                        const key = toKey(date.getFullYear(), date.getMonth(), date.getDate())
                        return isDone(activeHabit?.id, key) ? 'highlightDay' : null
                    }}
                    maxDate={new Date()}
                />
            </div>
        </section>
    )
}
