//Add queryselector for search buttion//

// API KEY: 223ef6828e1b3661f819f06cb10c54a5//
var request = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"

var CityInput = document.querySelector(".city-input");
var searchButton = document.querySelector(".search-btn");

var getCityCoordinates = () => {
    var cityName = CityInput.value.trim (); // Make sure the user enters the city name like "London" as example. Remove extra spaces.
    if(cityName) return; // Must return if cityName is empty

    console.log(cityName)

}