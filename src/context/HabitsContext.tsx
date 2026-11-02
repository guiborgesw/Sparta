import { createContext, useState, useContext, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Habit, HabitMarks } from '../@types/habits'
import { loadHabits, loadMarks, saveHabits, saveMarks } from '../services/storage'

export const HabitsContext = createContext<HabitsContextValue | null>(null)

export type HabitsContextValue = {
    habits: Habit[]
    marks: HabitMarks
    addHabit: (name: string) => void
    removeHabit: (habitId: string) => void
    toggleMark: (habitId: string, day: string) => void
    isDone: (habitId: string, day: string) => boolean
}

export function HabitsProvider({ children }: { children: ReactNode }) {
    const [habits, setHabits] = useState<Habit[]>(() => loadHabits())
    const [marks, setMarks] = useState<HabitMarks>(() => loadMarks())

    useEffect(() => {
        saveHabits(habits)
    }, [habits])

    useEffect(() => {
        saveMarks(marks)
    }, [marks])

    function addHabit(name: string) {
        const trimmed = name.trim()
        if (!trimmed) return

        const habit: Habit = { id: crypto.randomUUID(), name: trimmed }
        setHabits(prev => [...prev, habit])
    }

    function removeHabit(habitId: string) {
        setHabits(prev => prev.filter(h => h.id !== habitId))
        setMarks(prev => prev.filter(m => m.habitId !== habitId))
    }

    function toggleMark(habitId: string, day: string) {
        setMarks(prev => {
            const exists = prev.some(m => m.habitId === habitId && m.day === day)

            return exists
                ? prev.filter(m => !(m.habitId === habitId && m.day === day))
                : [...prev, { habitId, day }]
        }) 
    }

    function isDone(habitId: string, day: string) {
        return marks.some(m => m.habitId === habitId && m.day === day)
    }

    const value: HabitsContextValue = {
        habits,
        marks,
        addHabit,
        removeHabit,
        toggleMark,
        isDone,
    }

    return (
        <HabitsContext.Provider value={value}>
            {children}
        </HabitsContext.Provider>
    )
}

export function useHabits(): HabitsContextValue {
  const context = useContext(HabitsContext)

  if (!context) throw new Error('useHabits must be used inside <HabitsProvider>')

  return context
}