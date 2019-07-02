//Declaring variables
/* const key = "4014ad52db0336b19314ff5bd1e76dbc";
const apiURL = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4014ad52db0336b19314ff5bd1e76dbc";
const weatherDisplay = document.getElementsByClassName('show-weather'); //div weather
let weatherFocus = weatherDisplay.value;
let userInput = document.getElementsByClassName('user-city'); //input field */
const key = '4014ad52db0336b19314ff5bd1e76dbc';

function weatherBallon(cityID) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(response) { return response.json() }) // Convert data to json
        .then(function(data) {
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors²
        });
}

function drawWeather(day) {
    var celsius = Math.round(parseFloat(day.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(day.main.temp) - 273.15) * 1.8) + 32);
    var description = day.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celsius + '&deg;';
    document.getElementById('location').innerHTML = day.name;

    if (description.indexOf('rain') > 0) {
        document.body.className = 'rainy';
    } else if (description.indexOf('cloud') > 0) {
        document.body.className = 'cloudy';
    } else if (description.indexOf('sunny') > 0) {
        document.body.className = 'sunny';
    } else {
        document.body.className = 'clear';
    }
}
window.onload = function() {
    weatherBallon(2802361);
}