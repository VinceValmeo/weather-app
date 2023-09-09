import React from "react";
import "./Current-Weather.css";
import { day } from "../../assets/assests";
import WeatherDetail from "./WeatherDetail";

function CurrentWeather() {
  return (
    <div className="CurrentWeather__container">
      <div className="weather__card">
        <div className="weather__card__top">
          <div className="weather__card__top__text">
            <p className="city">Belgrade</p>
            <p className="weather__description">Sunny</p>
          </div>
          <img alt="weather icon" className="weather__icon" src={day} />
        </div>
        <div className="weather__card__bottom">
          <p className="temperature">18°C</p>
          <div className="details">
            <div className="parameter__label">Details</div>

            <WeatherDetail label="Feels Like" value="32°C" />
            <WeatherDetail label="Wind" value="2m/s" />
            <WeatherDetail label="Humidity" value="15%" />
            <WeatherDetail label="Pressure" value="15hPa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
