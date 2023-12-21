export const currentDate: Date = new Date()
export let currentDay: number = currentDate.getDate()
export let currentMonth: number = currentDate.getMonth() + 1
export let currentYear: number = currentDate.getFullYear()

export const monthDaysNum: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
