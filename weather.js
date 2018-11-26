const COORDS="coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
}

function handleGeoError(position){
    console.log("Can access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadCords===null){
        askForCoords();
    }else{

    }
}

function init(){
    loadCoords();
}

init();