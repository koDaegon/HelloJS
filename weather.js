const COORDS = 'coords';
const API_KEY ="07935da8414bb5db2bf21c0cdcbd9e4b";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";
const weather = document.querySelector(".js-weather");


function askLocation() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess , handleGeoError);
}

function getWeather(lat , lon) {
    fetch (`${WEATHER_API}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json()
    })
    .then(function(json) {
        const temp = json.main.temp;
        const max_temp = json.main.temp_max;
        const min_temp = json.main.temp_min;
        const location = json.name;
        weather.innerText = (`${location} @ ${temp}°C  `);
        weather.innerHTML +=`<div>${max_temp}°C / ${min_temp}°C</div>`;
        console.log(json);
    });
    }

function handleGeoError() {
    alert("Loading Location failed");
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    if (loadCoords === null) {
        askLocation();
    } else {
        //getWeather
        const parseCoords = JSON.parse(loadCoords);
        
        getWeather(parseCoords.latitude , parseCoords.longitude);
    }
}


function init() {
    loadCoords();
}
init();