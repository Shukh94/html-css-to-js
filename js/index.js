// show date
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentDay = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDay];

  return `${day} ${hours}:${minutes}`;
}

let currentDate = document.querySelector("#date");
let currentTime = new Date();
currentDate.innerHTML = formatDate(currentTime);

// Search function
function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityName.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//Fahrenheit
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 60;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

//Celsius
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 16;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
