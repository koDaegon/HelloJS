const COORDS = 'coords';

function askLocation() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess , handleGeoError);
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
}

function loadCoords() {
    const loadCoords = localStorage.getItem(COORDS);
    if (loadCoords === null) {
        askLocation();
    } else {
        //getWeather
    }
}


function init() {
    loadCoords();
}
init();