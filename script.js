const settingsBtn = document.querySelector(".settings-btn")
const settingsPanel = document.querySelector(".settings")
const saveBtn = document.querySelector(".save")
const eventNameInput = document.querySelector("#event-name")

const imgLinkInput = document.querySelector("#event-image")
const imgSection = document.querySelector(".image-section")

const eventNameSpan = document.querySelector("span.event")

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

settingsBtn.addEventListener("click", () => {
	settingsPanel.classList.toggle("active")
})

saveBtn.addEventListener("click", showEventName)
saveBtn.addEventListener("click", changeImg)
