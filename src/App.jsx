import React, { useState } from "react";
import "./App.css";
import {
  Header,
  Search,
  CurrentWeather,
  Forecast,
  Footer,
} from "./components/components";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./API/api";

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();

  function handleOnSearchChange(searchData) {
    const [latidude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latidude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latidude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className="app__container">
      <Header />
      <Search onSearchChange={handleOnSearchChange} />
      <div className="weather__container">
        <div className="current__weather">
          {currentWeather && <CurrentWeather data={currentWeather} />}
        </div>
        <div className="forecast__weather">
          {" "}
          {forecastWeather && <Forecast data={forecastWeather} />}
        </div>
      </div>
      <div className="about__app">
        <h2>Introducing Atmosify: Your Always Ready Weather Partner!</h2>
        <p>
          Experience weather planning like never before with Atmosify. Benefit
          from highly accurate forecasts in your city of choice around the
          world. Be informed, stay ready—Atmosify is here to assist.{" "}
        </p>
        <img
          src="src/assets/misc/atmosify_mockup.png"
          alt="Atmosify on different devices"
        />
        <h4> Download today for a smarter approach to weather planning!</h4>
      </div>
      <Footer />
    </div>
  );
}

export default App;
