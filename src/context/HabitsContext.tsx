import { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'
import type { Habit, HabitMarks } from '../@types/habits'

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
    const [habits, setHabits] = useState<Habit[]>([])
    const [marks, setMarks] = useState<HabitMarks>([])

    function addHabit(name: string) {

    }

    function removeHabit(habitId: string) {

    }

    function toggleMark(habitId: string, day: string) {

    }

    function isDone(habitId: string, day: string) {
        return false
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