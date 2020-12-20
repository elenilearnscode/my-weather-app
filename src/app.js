// DATE & TIME

function formatDate() {
  let dayIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = dayIndex[currentDate.getDay()];

  let hours = currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let city = "Maidstone";
var apiUrl = "";
let unit = "metric"; // metric for celsius

let currentDate = new Date();
let date = document.querySelector("#date");
date.innerHTML = formatDate(currentDate);

// SEARCH ENGINE

let celsiusTemperature = 12

  function showTemperature(response) {
  celsiusTemperature = response.data.main.temp;
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-input");
  let cityName = document.querySelector("#city");
  cityName.innerHTML = citySearch.value;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  searchCity(citySearch.value);
}

function searchCity(city) {
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
  }
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

// CURRENT-CITY BUTTON

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric"; // metric for celsius
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
  axios.get(apiUrl).then(showTemperature);
}


function displayFahrenheit(event){
event.preventDefault();
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
fahrenheitLink.classList.add("active");
celsiusLink.classList.remove("active");
// let temperatureElement = document.querySelector("#temperature");
// temperatureElement.innerHTML = Math.round(fahrenheitTemperature)
// }

// temperatureElement.innerHTML = Math.round(response.data.main.temp);
// cityElement.innerHTML = response.data.name;
// descriptionElement.innerHTML = response.data.weather[0].description;
// humidityElement.innerHTML = response.data.main.humidity;
// windElement.innerHTML = Math.round(response.data.wind.speed);
// dateElement.innerHTML = Math.round(response.data.dt *1000);
// iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
//  iconElement.setAttribute("alt", response.data.weather[0].description);
  
// function displayCelsius(event){
// event.preventDefault();
// fahrenheitLink.classList.remove("active");
// celsiusLink.classList.add("active");
// let temperatureElement = document.querySelector("#temperature");
// temperatureElement.innerHTML = Math.round(celsiusTemperature)
// }

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsius);

function startGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let position = document.querySelector("#current-city-btn");
position.addEventListener("click", startGeolocation);

search("Maidstone");