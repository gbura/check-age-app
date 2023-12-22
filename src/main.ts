import './styles/style.css'
import { currentDate, currentDay, currentMonth, currentYear, monthDaysNum } from './Dates/Dates'

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

	inputs.forEach(input => {
		const closestError = input.parentElement?.querySelector('.error') ?? error

		if (!input.value) {
			input.style.borderColor = 'hsl(0, 100%, 67%)'
			closestError.textContent = 'This field is required!'
		} else {
			const inputValue = Number(input.value)

			if (input === dayInput) {
				if (inputValue < 1 || inputValue > 31) {
					closestError.textContent = 'Must be a valid day!'
				}
				closestError.textContent = ''
			} else if (input === monthInput) {
				if (inputValue < 1 || inputValue > 12) {
					closestError.textContent = 'Must be a valid month!'
				}
				closestError.textContent = ''
			} else if (input === yearInput) {
				if (inputValue < 1 || inputValue > currentYear) {
					closestError.textContent = 'Must be a valid year!'
				}
				closestError.textContent = ''
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
}

showAgeBtn.addEventListener('click', () => {
	validate()
	countAge()
})
