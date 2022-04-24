const API_KEY = "feb4d82d5e7629a0367ae85639c56b45";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} /${data.main.temp} `;
    });
}
function onGeoError() {
  alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
