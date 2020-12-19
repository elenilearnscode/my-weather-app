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

let currentDate = new Date();
let date = document.querySelector("#date");
date.innerHTML = formatDate(currentDate);

// SEARCH ENGINE

let celsiusTemperature = null

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
  searchCity(citySearch.value);
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  let unit = "metric"; // metric for celsius
  axios.get(apiUrl).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

// CURRENT-CITY BUTTON

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric"; // metric for celsius
}


function displayFahrenheit(event){
event.preventDefault();
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
fahrenheitLink.classList.add("active");
celsiusLink.classList.remove("active");
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(fahrenheitTemperature)
}


function displayCelsius(event){
event.preventDefault();
fahrenheitLink.classList.remove("active");
celsiusLink.classList.add("active");
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(celsiusTemperature)
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsius);

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
axios.get(apiUrl).then(showTemperature);


function startGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let position = document.querySelector("#current-city-btn");
position.addEventListener("click", startGeolocation);