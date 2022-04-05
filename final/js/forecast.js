const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=38.9957&lon=-77.1072&units=imperial&exclude=hourly&appid=b1462fd89a4da2db57efc785aab72a75`

fetch(forecastUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        const days = jsObject.daily

        const format = days.map((d) => {
            const date = new Date(d.dt * 1000)
            return {
                temp: d.temp,
                weather: d.weather,
                humidity: d.humidity,
                speed: d.wind_speed,
                dt: date
            }
        })

        console.log(format)

        const firstThree = format.slice(0, 3);
        firstThree.forEach((day, index) => {
            const daytext = document.querySelector(`#day${index +1}`);
            const temptext = document.querySelector(`#t${index + 1}`);
            const humtext = document.querySelector(`#hum${index + 1}`);
            const desctext = document.querySelector(`#desc${index + 1}`);
            const speedtext = document.querySelector(`#speed${index + 1}`);
            daytext.textContent = `${day.dt}`;
            temptext.textContent = `${day.temp.day}`;
            humtext.textContent = `${day.humidity}`;
            desctext.textContent = `${day.weather[0].description}`;
            speedtext.textContent = `${day.speed}`
        })
    })
