function showTemp(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
temperatureElement.innerHTML = Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round (response.data.wind.speed);
}
let apiKey = "10566d0f9902e77e497ca722e7aa0b84";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cork&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemp);