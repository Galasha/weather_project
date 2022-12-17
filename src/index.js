let apiKey = "49b631c45785fe73d2a88477803dea22";

//Current day data
function getTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let current_tempa = document.querySelector("#current_degrees");
  current_tempa.innerHTML = `${temperature}&#176C`;
  let currentCityName = document.querySelector("h1");
  currentCityName.innerHTML = response.data.name;
}

function getPreciptation(response) {
  let currentPreciptation = response.data.weather[0].description;
  let currentHumidity = response.data.main.humidity;
  let current_precip = document.querySelector("#curr_preciptation");
  current_precip.innerHTML = `${currentPreciptation}, Humidity: ${currentHumidity}%`;
}

function changeBackground(response) {
  let weatherInfo = response.data.weather[0].description;
  if (weatherInfo.match(/snow/)) {
    let oldImage = document.getElementById("background_img");
    oldImage.src = "./images/snow1.jpg";
  } else if (weatherInfo.match(/rain/)) {
    let oldImage = document.getElementById("background_img");
    oldImage.src = "./images/rain.jpg";
  } else if (weatherInfo.match(/sky/)) {
    let oldImage = document.getElementById("background_img");
    oldImage.src = "./images/clear_sky.jpg";
  } else if (weatherInfo.match(/clouds/)) {
    let oldImage = document.getElementById("background_img");
    oldImage.src = "./images/clouds.jpg";
  } else {
    let oldImage = document.getElementById("background_img");
    oldImage.src = "./images/background.jpg";
  }
}

function getWind(response) {
  let speedWind = response.data.wind.speed;
  let current_wind = document.querySelector("#curr_wind");
  current_wind.innerHTML = `Wind is ${speedWind}m/s`;
}

function getIcon(response) {
  let newIconSrc = response.data.weather[0].icon;
  let oldIcon = document.querySelector("#current_icon_weather");
  oldIcon.src = `http://openweathermap.org/img/wn/${newIconSrc}@2x.png`;
}

function searchCityName(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#city_name");
  let newCity = searchCity.value;
  if (searchCity.value !== null) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
    axios.get(`${apiUrl}&appid=${apiKey}`).then(getPreciptation);
    axios.get(`${apiUrl}&appid=${apiKey}`).then(getWind);
    axios.get(`${apiUrl}&appid=${apiKey}`).then(getIcon);
    axios.get(`${apiUrl}&appid=${apiKey}`).then(changeBackground);
  } else {
    currentCityWeather();
  }
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", searchCityName);

function searchpopularCity1() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getPreciptation);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWind);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getIcon);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(changeBackground);
}

let popularCity1 = document.querySelector("#popular_city1");
popularCity1.addEventListener("click", searchpopularCity1);

function searchpopularCity2() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lviv&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getPreciptation);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWind);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getIcon);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(changeBackground);
}

let popularCity2 = document.querySelector("#popular_city2");
popularCity2.addEventListener("click", searchpopularCity2);

function searchpopularCity3() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Odessa&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getPreciptation);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWind);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getIcon);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(changeBackground);
}

let popularCity3 = document.querySelector("#popular_city3");
popularCity3.addEventListener("click", searchpopularCity3);

function searchpopularCity4() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getPreciptation);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWind);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getIcon);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(changeBackground);
}

let popularCity4 = document.querySelector("#popular_city4");
popularCity4.addEventListener("click", searchpopularCity4);

function searchpopularCity5() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dnipro&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getPreciptation);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWind);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getIcon);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(changeBackground);
}

let popularCity5 = document.querySelector("#popular_city5");
popularCity5.addEventListener("click", searchpopularCity5);

function currentCityWeather(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getPreciptation);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWind);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentCityWeather);
}

let locationButton = document.querySelector("#current_button");
locationButton.addEventListener("click", getCurrentPosition);

function formatDate(date) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentDate = new Date();
  let currentDayofWeek = daysOfWeek[currentDate.getDay()];
  let currentMonth = monthsOfYear[currentDate.getMonth()];
  let currentDay = currentDate.getDate();

  let request = `${currentDayofWeek}, ${currentMonth} ${currentDay} `;

  return request;
}

function formatTime(time) {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let timestamp = `${hour} : ${minutes}`;
  return timestamp;
}

current_date.innerHTML = formatDate();
current_time.innerHTML = formatTime();

function convertToFarh() {
  let celsius = -17;
  let a = 1.8;
  let b = 32;
  let fahrenheitdata = Math.round(celsius * a + b);
  let currentDegreeC = document.querySelector("#current_degrees");
  currentDegreeC.innerHTML = `${fahrenheitdata}&#176F`;
}

function convertToCels() {
  let a = 1.8;
  let b = 32;
  let fahrenheitdata = 1;
  let celsiusdata = Math.round((fahrenheitdata - b) / a);
  let currentDegreeF = document.querySelector("#current_degrees");
  currentDegreeF.innerHTML = `${celsiusdata}&#176C`;
}

let convertFahrenheit = document.querySelector("#convertFahr");
convertFahrenheit.addEventListener("click", convertToFarh);

let convertCelsius = document.querySelector("#convertCel");
convertCelsius.addEventListener("click", convertToCels);
