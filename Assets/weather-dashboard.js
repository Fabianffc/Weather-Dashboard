//Pull the selector for the html to JS and assign them into a variable
const cityName = document.querySelector("#city-name");
const searchButton = document.querySelector("#search-button");
const clearHistory = document.querySelector("#clear-history");
const currentCity = document.querySelector("#current-city");
const temp = document.querySelector("#temperature");
const description = document.querySelector("#description");
const windSpeed = document.querySelector("#wind-speed");
const uvIndex = document.querySelector("#UV-Index");

//This is our APIKey for OpenWeather website
const myAPIKey="d85ff1873d2dce2e6a1e8ef9f5812e12"
//Make funtionality to our selectors
searchButton.addEventListener("click",function(){
  
  queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName.value+"&units=imperial&appid=" + myAPIKey 
  fetch(queryURL).then(function(response){
    return response.json()
  }).then(function(results){
    console.log(results)
    //on currentDay variable we switch the parameters from seconds to an actual understandable format
    var currentDay=moment(results.dt,"X").format("LLL")
    var iconcode=results.weather[0].icon
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    var img="<img src="+iconurl+"    />"
    
    windSpeed.innerHTML= `Wind Speed: ${results.wind.speed} mph`
    currentCity.innerHTML=results.name +" " + currentDay+img
    temp.innerHTML= `Temperature: ${results.main.temp}°F`
    description.innerHTML= results.weather[0].description
  })
  
  
  
  
  queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+cityName.value+"&appid=" + myAPIKey 
  fetch(queryURL).then(function(response){
    return response.json()
  }).then(function(results){
    console.log(results)
  })



})

//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city
//WHEN I open the weather dashboard
//THEN I am presented with the last searched city forecast

