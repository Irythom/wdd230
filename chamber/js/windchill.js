const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=84005,us&units=imperial&APPID=b1462fd89a4da2db57efc785aab72a75`

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const icon = document.querySelector('#icon');
        const temp = document.querySelector('#t');
        const wind = document.querySelector('#s');
        const description = document.querySelector('#description')

        const currentTemp = jsObject.main.temp;
        const windSpeed = jsObject.wind.speed;
        const weatherIcon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const weatherDescription = jsObject.weather[0].description;

        temp.textContent = currentTemp.toFixed(0);
        icon.setAttribute('src', weatherIcon);
        icon.setAttribute('alt', weatherDescription);
        description.textContent =weatherDescription;
        wind.textContent = windSpeed.toFixed();

        if (currentTemp <= 50 && windSpeed > 3) {
            windchill = windChill(currentTemp, windSpeed);
            windchill = `${windchill}&#176;F`;
        } else {
            windchill = 'N/A';
        }
        
        document.querySelector('#w').innerHTML = windchill;

        function windChill (temp, speed) {
            return (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed();
        }
    })

    /*
let t = parseFloat(document.querySelector("#t").textContent); 
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = ""


if (t <= 50 && s > 3) {
    windchill = windChill(t, s);
    windchill = `${windchill.toFixed(2)}°F`
} else {
 windchill = "N/A";
}

document.querySelector("#w").textContent = windchill;

function windChill(temp, wind) {
    return 35.74 + 0.6125 * temp - 35.75 * Math.pow(wind, .16) + .4275 * temp * Math.pow(wind, .16)
}
*/