export function toKey(year: number, month: number, day: number) {
    return (
        `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    )
}