export interface Habits {
    id: string
    name: string
    done: boolean
}

export interface MarkedDays {
    Record<string, boolean>
}