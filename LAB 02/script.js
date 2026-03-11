let historyList = JSON.parse(localStorage.getItem("cities")) || [];

showHistory();

function log(msg) {
    document.getElementById("console").innerHTML += "<br>" + msg;
}

function searchWeather(cityParam) {

    let city = cityParam || document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("weatherResult").innerHTML = "Enter city name";
        return;
    }

    log("Fetching weather for " + city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`)
        .then(res => res.json())
        .then(data => {

            if (data.cod != 200) {
                document.getElementById("weatherResult").innerHTML = "<p style='color:red'>Data Not Found</p>";
                return;
            }

            document.getElementById("weatherResult").innerHTML =

                `<div class="weather-row"><span>City</span><span>${data.name}</span></div>
                    <div class="weather-row"><span>Temp</span><span>${data.main.temp} °C</span></div>
                    <div class="weather-row"><span>Weather</span><span>${data.weather[0].main}</span></div>
                        <div class="weather-row"><span>Humidity</span><span>${data.main.humidity}%</span></div>
                        <div class="weather-row"><span>Wind</span><span>${data.wind.speed} m/s</span></div>`;

            addHistory(city);

        })
        .catch(() => {
            document.getElementById("weatherResult").innerHTML = "<p style='color:red'>Data Not Found</p>";
        });
}

function addHistory(city) {
    if (!historyList.includes(city)) {
        historyList.unshift(city);
    }
    localStorage.setItem("cities", JSON.stringify(historyList));
    showHistory();
}

function showHistory() {
    let html = "";
    historyList.forEach(city => {
        html += `<span onclick="searchWeather('${city}')">${city}</span>`;
    });

    document.getElementById("history").innerHTML = html;
}