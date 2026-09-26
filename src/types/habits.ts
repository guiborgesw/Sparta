export interface Habit {
    id: string
    name: string
    done: boolean
}

export type MarkedDays = Record<string, boolean>