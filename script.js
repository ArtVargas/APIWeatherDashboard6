//Add queryselector for search buttion//
var CityInput = document.querySelector(".city-input");
var searchButton = document.querySelector(".search-btn");

var getCityCoordinates = () => {
    var cityName = CityInput.value.trim (); // Make sure the user enters the city name like "London" as example. Remove extra spaces.
    if(cityName) return; // Must return if cityName is empty

    console.log(cityName)

}