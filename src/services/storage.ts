import type { Habit, HabitMark } from '../@types/habits';

const HABITS_KEY = '@sparta:habits-1.0.0';
const MARKS_KEY = '@sparta:marks-1.0.0';

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null
}

function isHabit(value: unknown): value is Habit {
    return isRecord(value)
        && typeof value.id === 'string'
        && typeof value.name === 'string'
}

function isHabitMark(value: unknown): value is HabitMark {
    return isRecord(value)
        && typeof value.habitId === 'string'
        && typeof value.day === 'string'
}

function readJSON(key: string): unknown {
    try {
        const raw = localStorage.getItem(key)
        if (raw === null) return null
        return JSON.parse(raw)
    } catch {
        return null
    }
}

function writeJSON(key: string, value: unknown): void {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch {
        // storage cheio ou bloqueado: o app segue funcionando só em memória
    }
}

export function loadHabits(): Habit[] {
    const data = readJSON(HABITS_KEY)

    if (!Array.isArray(data) || !data.every(isHabit)) return []

    return data.map(({ id, name }) => ({ id, name }))
}

export function saveHabits(habits: Habit[]): void {
    writeJSON(HABITS_KEY, habits)
}

export function loadMarks(): HabitMark[] {
    const data = readJSON(MARKS_KEY)

    if (!Array.isArray(data) || !data.every(isHabitMark)) return []

    return data.map(({ habitId, day }) => ({ habitId, day }))
}

export function saveMarks(marks: HabitMark[]): void {
    writeJSON(MARKS_KEY, marks)
}