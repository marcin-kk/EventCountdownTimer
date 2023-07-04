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

// const curDate = new Date()
// console.log(curDate)
// const givDate = new Date(2023, 6, 3)
// console.log(givDate)
// console.log((curDate - givDate) / 1000 / 60 / 60 / 24)



const calculateDate = () => {
	const year = yearInput.value
	const month = monthInput.value
	const day = dayInput.value

    const currentDate = new Date()
    console.log(currentDate);

    const givenDate = new Date(`${year},${month},${day}`)
    console.log(givenDate);
}

settingsBtn.addEventListener("click", showPanel)
saveBtn.addEventListener("click", showEventName)
saveBtn.addEventListener("click", changeImg)
saveBtn.addEventListener("click", calculateDate)