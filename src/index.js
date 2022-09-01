function callApi(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eff735341103360529abbe301d4dd76c&units=metric`)
    .then(response => {
        if (!response.ok) {
            createError()
        }
        return response.json()
    })
    .then(data =>{
        console.log(data)
        createDisplay(data.weather[0].icon, data.weather[0].description, data.main.temp, data.name)
    })
    
}

const input = document.querySelector(".mainforminput")

const form = document.querySelector(".mainform")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    callApi(input.value)
})

const container = document.querySelector(".container")

function createDisplay(picture, state, temperature, location) {
    clearContainer()
    const wrapper = document.createElement("div")
    container.append(wrapper)

    const img = document.createElement("img")
    img.src = `http://openweathermap.org/img/wn/${picture}@2x.png`
    wrapper.append(img)

    const status = document.createElement("h1")
    status.innerText = state
    wrapper.append(status)

    const celsius = document.createElement("h1")
    celsius.innerText = temperature
    wrapper.append(celsius)

    const city = document.createElement("h1")
    city.innerText = location
    wrapper.append(city)
}

function createError() {
    clearContainer()
    const errorEl = document.createElement("h1")
    errorEl.innerText = "Invalid city name"
    container.append(errorEl)
}

function clearContainer() {
    container.replaceChildren()
}
