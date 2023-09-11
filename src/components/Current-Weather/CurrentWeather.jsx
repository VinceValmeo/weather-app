import React from "react";
import "./Current-Weather.css";
import WeatherDetail from "./WeatherDetail";

function CurrentWeather({ data }) {
  return (
    <div className="CurrentWeather__container">
      <div className="weather__card">
        <div className="weather__card__top">
          <div className="weather__card__top__text">
            <p className="city">{data.city}</p>
            <p className="weather__description">
              {data.weather[0].description}
            </p>
          </div>
          <img
            alt="weather icon"
            className="weather__icon"
            src={`src/assets/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="weather__card__bottom">
          <p className="temperature">{Math.round(data.main.temp) + "°C"}</p>
          <div className="details">
            <div className="parameter__label">Details</div>
            <WeatherDetail
              label="Feels Like"
              value={Math.round(data.main.feels_like) + "°C"}
            />
            <WeatherDetail label="Wind" value={data.wind.speed + " m/s"} />
            <WeatherDetail label="Humidity" value={data.main.humidity + "%"} />
            <WeatherDetail
              label="Pressure"
              value={data.main.pressure + " hPa"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
