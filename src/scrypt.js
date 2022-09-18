function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}
function showForecast() {
    let forecastElement = document.querySelector("#forecast");
    let days = ["Thu", "Fri", "Sat", "Sun"];
    let forecastHTML = `<div class="row">`;
    
    days.forEach(function(day) {
    forecastHTML = forecastHTML + `
        <div class="col-2">
            <div class="weather-forecast-date"><br/>${day}</div>
            <img src="src/sun-128x128-445578.png" alt="" width="42"/>
            <div class="weather-forecast-temps">
                <span class="weather-forecast-temp-max">
            18 </span>
            <span class="weather-forecast-temp-min">
            12 </span>
        </div>
    </div>
    `;    
    });
  
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
}

function showTemp(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

celsTemp = response.data.main.temp;


temperatureElement.innerHTML = Math.round(celsTemp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city) {
    let apiKey = "10566d0f9902e77e497ca722e7aa0b84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
}
 
function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}
function showFahrTemp(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    //remove active of C
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let fahrTemp = (celsTemp * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrTemp);
}
function showCelsTemp(event) {
    event.preventDefault();
    //remove active of F
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsTemp);
}

let celsTemp = null;


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrTemp);
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsTemp);

search("Cork");
showForecast();