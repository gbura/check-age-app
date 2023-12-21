import './styles/style.css'
import { currentDate, MIN_DAYS, MAX_DAYS, MIN_MONTHS, MAX_MONTHS, MIN_YEAR, MAX_YEAR } from './Dates/Dates'

const inputBox = <HTMLDivElement>document.querySelector('.box')
const dayInput = <HTMLInputElement>document.getElementById('day')
const monthInput = <HTMLInputElement>document.getElementById('month')
const yearInput = <HTMLInputElement>document.getElementById('year')

const ageYears = <HTMLSpanElement>document.querySelector('.age-years')
const ageMonths = <HTMLSpanElement>document.querySelector('.age-months')
const ageDays = <HTMLSpanElement>document.querySelector('.age-days')

const showAgeBtn = <HTMLButtonElement>document.querySelector('.arrow-btn')

console.log(currentDate)

// checking if spans get inputs value
// showAgeBtn.addEventListener('click', (): void => {
// 	if (!dayInput.value || !monthInput.value || !yearInput.value) return
// 	ageDays.textContent = dayInput.value
// 	ageMonths.textContent = monthInput.value
// 	ageYears.textContent = yearInput.value

// 	dayInput.value = monthInput.value = yearInput.value = ''
// })

//try to do validation
// const validateInputs = (): void => {
// 	if (
// 		yearInput.value > MAX_YEAR ||
// 		(monthInput.value > MAX_MONTHS && monthInput.value < MIN_MONTHS) ||
// 		(dayInput.value > MAX_DAYS && dayInput.value < MIN_DAYS)
// 	) {
// 		const error = document.createElement('p')
// 		error.classList.add('error')
// 		error.textContent = 'Uzupełnij poprawnie dane!'
// 		inputBox.appendChild(error)
// 	}
// }
