import './styles/style.css'
import { currentDate, currentDay, currentMonth, currentYear } from './Dates/Dates'

const dayInput = <HTMLInputElement>document.getElementById('day')
const monthInput = <HTMLInputElement>document.getElementById('month')
const yearInput = <HTMLInputElement>document.getElementById('year')

const yearsOutput = <HTMLSpanElement>document.querySelector('.age-years')
const monthsOutput = <HTMLSpanElement>document.querySelector('.age-months')
const daysOutput = <HTMLSpanElement>document.querySelector('.age-days')

const showAgeBtn = <HTMLButtonElement>document.querySelector('.arrow-btn')

function validate(): void {
	const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input')
	const error = <HTMLParagraphElement>document.querySelector('.error')

	const birthDay: number = Number(dayInput.value)
	const birthMonth: number = Number(monthInput.value)
	const birthYear: number = Number(yearInput.value)

	const birthDate: Date = new Date(birthYear, birthMonth - 1, birthDay)

	const birthDayOutput = birthDate.getDate()
	// const birthMonthOutput = birthDate.getMonth() + 1
	// const birthYearOutput = birthDate.getFullYear()

	inputs.forEach(input => {
		const closestError = input.parentElement?.querySelector('.error') ?? error

		closestError.textContent = ''

		if (!input.value) {
			input.style.borderColor = 'hsl(0, 100%, 67%)'
			closestError.textContent = 'This field is required!'
		} else {
			const inputValue = Number(input.value)
			if (input === dayInput) {
				if (inputValue < 1 || inputValue > 31 || inputValue !== birthDayOutput) {
					closestError.textContent = 'Must be a valid day!'
				}
			} else if (input === monthInput) {
				if (inputValue < 1 || inputValue > 12) {
					closestError.textContent = 'Must be a valid month!'
				}
			} else if (input === yearInput) {
				if (inputValue < 1 || inputValue > currentYear) {
					closestError.textContent = 'Must be a valid year!'
				}
			}
			input.style.borderColor = 'hsl(0, 0%, 86%)'
		}
	})
}

function countAge() {
	const birthDay: number = Number(dayInput.value)
	const birthMonth: number = Number(monthInput.value)
	const birthYear: number = Number(yearInput.value)

	const birthDate: Date = new Date(birthYear, birthMonth - 1, birthDay)
	console.log(birthDate)

	// const birthDayOutput = birthDate.getDate()
	// const birthMonthOutput = birthDate.getMonth() + 1
	// const birthYearOutput = birthDate.getFullYear()

	let ageYears = currentYear - birthYear
	let ageMonths = currentMonth - birthMonth
	let ageDays = currentDay - birthDay

	if (ageDays < 0) {
		ageMonths--
		const daysInMonth = new Date(currentYear, currentMonth, 0).getDate()
		ageDays += daysInMonth
	}

	if (ageMonths < 0) {
		ageYears--
		ageMonths += 12
	}

	yearsOutput.textContent = ageYears.toString()
	monthsOutput.textContent = ageMonths.toString()
	daysOutput.textContent = ageDays.toString()
}

showAgeBtn.addEventListener('click', () => {
	validate()
	const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input')
	const error = <HTMLParagraphElement>document.querySelector('.error')
	inputs.forEach(input => {
		const closestError = input.parentElement?.querySelector('.error') ?? error

		if (closestError) {
			return
		} else {
			countAge()
		}
	})
})
