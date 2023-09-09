import React from "react";
import "./Current-Weather.css";
import { day } from "../../assets/assests";

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
            <div className="parameter__row">
              <span className="parameter__label">Details</span>
            </div>

            <div className="parameter_row">
              <span className="parameter__label">Feels Like</span>
              <span className="parameter__value">32°C</span>
            </div>
            <div className="parameter_row">
              <span className="parameter__label">Wind</span>
              <span className="parameter__value">2m/s</span>
            </div>

            <div className="parameter_row">
              <span className="parameter__label">Humidity</span>
              <span className="parameter__value">15%</span>
            </div>

            <div className="parameter_row">
              <span className="parameter__label">Pressure</span>
              <span className="parameter__value">15hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
