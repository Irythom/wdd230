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
