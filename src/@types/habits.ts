export interface Habit {
    id: string
    name: string
}

export interface HabitMark {
    habitId: string
    day: string
}

export type HabitMarks = HabitMark[]