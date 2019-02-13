navigator.geolocation.getCurrentPosition(success);

function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const cityName = document.querySelector(".cityName");
    const temperature = document.querySelector(".temp");
    const weatherImg = document.querySelector(".weatherImg");
    let weatherType = "";
    // const weatherImg = document.querySelector(".weatherImg");

    const api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

    fetch(api)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            cityName.textContent = `${res.name},  ${res.sys.country}`;
            temperature.textContent = res.main.temp;
            weatherType = res.weather[0].main;

            switch (weatherType) {
            case "Clouds":
                    weatherImg.src = "img/cloud.svg";
                    break;
                case "Drizzle":
                weatherImg.src = "img/drizzle.svg";
                    break;
                case "Snow":
                weatherImg.src = "img/snow.svg";
                    break;
            case "Rain":
                    weatherImg.src = "img/rain.svg";
                    break;
            case "Clear":
                    weatherImg.src = "img/clear.svg";
                break;
            case "Thunderstom":
                    weatherImg.src = "img/thunderstrom.svg";
                break;
            }
        })
        .catch(error => {
            console.error(error);
        });
}

function changeDegrees() {
    const temperatureContent = document.querySelector(".temp");
    const temperatureUnit = document.querySelector(".tempUnit");

    if (temperatureUnit.textContent === "C") {
        temperatureUnit.textContent = temperatureUnit.textContent.replace(
            "C",
            "F"
        );

        temperatureContent.textContent = parseFloat(
            temperatureContent.textContent * 1.8 + 32
        )
            .toFixed(2)
            .toString();
    } else {
        temperatureUnit.textContent = temperatureUnit.textContent.replace(
            "F",
            "C"
        );

        temperatureContent.textContent = parseFloat(
            (temperatureContent.textContent - 32) / 1.8
        )
            .toFixed(2)
            .toString();
    }
}

const changeDegreesBtn = document.querySelector(".changeDegrees");
changeDegreesBtn.addEventListener("click", changeDegrees);
