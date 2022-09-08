function showTemp(response) {
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHtml = Math.round (response.data.main.temp);
}
let apiKey = "10566d0f9902e77e497ca722e7aa0b84";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cork&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(showTemp);