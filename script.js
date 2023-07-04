const settingsBtn = document.querySelector(".settings-btn")
const settingsPanel = document.querySelector(".settings")
const saveBtn = document.querySelector(".save")
const eventNameInput = document.querySelector("#event-name")
const imgLinkInput = document.querySelector("#event-image")
const imgSection = document.querySelector(".image-section")
const eventNameSpan = document.querySelector("span.event")
const yearInput = document.querySelector("#event-year")
const monthInput = document.querySelector("#event-month")
const dayInput = document.querySelector("#event-day")
const daysDisplay = document.querySelector(".days-count")
const hoursDisplay = document.querySelector(".hours-count")
const minutesDisplay = document.querySelector(".minutes-count")
const secondsDisplay = document.querySelector(".seconds-count")

let day
let month
let year

const SettingsSetTomorrowDate = () => {
	const date = new Date()
	// from MDN:
	const [month, day, year] = [
		date.getMonth(),
		date.getDate(),
		date.getFullYear(),
	]
	yearInput.value = year
	monthInput.value = month + 1
	dayInput.value = day + 1
}

SettingsSetTomorrowDate()

day = dayInput.value
month = monthInput.value
year = yearInput.value

const changeImg = () => {
	if (imgLinkInput.value === "") {
		imgSection.style.backgroundImage = "url('default.jpg')"
	} else {
		const newUrl = imgLinkInput.value
		imgSection.style.backgroundImage = `url("${newUrl}")`
	}
}

const showEventName = () => {
	eventNameSpan.textContent = eventNameInput.value
}

const showPanel = () => {
	settingsPanel.classList.toggle("active")
}

const calculateDate = () => {
	const currentDate = new Date()
	const givenDate = new Date(`${year},${month},${day}`)
	const dateDifference = givenDate - currentDate
	const seconds = Math.floor(dateDifference / 1000) % 60
	const minutes = Math.floor(dateDifference / 1000 / 60) % 60
	const hours = Math.floor(dateDifference / 1000 / 60 / 60) % 24
	const days = Math.floor(dateDifference / 1000 / 60 / 60 / 24)

	daysDisplay.textContent = days
	hoursDisplay.textContent = hours
	minutesDisplay.textContent = minutes
	secondsDisplay.textContent = seconds
}

const updateInputVariables = () => {
	day = dayInput.value
	month = monthInput.value
	year = yearInput.value
}

showEventName()

setInterval(calculateDate, 1000)
settingsBtn.addEventListener("click", showPanel)
saveBtn.addEventListener("click", showEventName)
saveBtn.addEventListener("click", changeImg)
saveBtn.addEventListener("click", updateInputVariables)
saveBtn.addEventListener("click", calculateDate)
