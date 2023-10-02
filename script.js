//Create API Variable//
var apiKey = "223ef6828e1b3661f819f06cb10c54a5";
var cityName;
var currentCity= document.querySelector('.current-city');

var getWeatherDetails = (cityName, lat, lon) => {

}

// creater function for weather application//
//Input for city//
var cityInput = document.querySelector(".city-input");
var searchButton = document.querySelector(".search-btn");

var getCityCoordinates = () => {
    var cityName = cityInput.value.trim(); //Get the user to center city name//
    if(!cityName) return; // Return if cityName is empty//
    apiURL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=223ef6828e1b3661f819f06cb10c54a5"; //Insert API URL//

    fetch(apiURL).then(res => res.json).then(data =>{
        if(data.length) return alert ("Oh no an error has occured fetching the coordinates!")
    })
}

searchButton.addEventListener("click",getCityCoordinates);

event.preventDefault();
cityName= document.getElementById('search').value;
var queryURL= "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=223ef6828e1b3661f819f06cb10c54a5"+ cityName + apiKey;
getApi (queryURL);



//Get Coordinates//
//Use navigator geo location//
//Must capture the long and lat//

var getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position =>{
            var {latitude, longitude} =position.coords
        }
    )


    if(error.codee === error.PERMISSION_DENIED){
        alert("Geolocation request has been denied. Please reset location for permission to grant access");
    }
}