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

function showTemperature(response) {
  let temperature = response.data.main.temp;
  let locationName = document.querySelector("#location");
  locationName.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(temperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let locationSearch = document.querySelector("#location-input");
  let locationName = document.querySelector("#location");
  locationName.innerHTML = locationSearch.value;
  searchLocation(locationSearch.value);
}

function searchLocation(location) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

// CURRENT-CITY BUTTON
function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let unit = "metric";
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function startGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}

let position = document.querySelector("#current-location-btn");
position.addEventListener("click", startGeolocation);
