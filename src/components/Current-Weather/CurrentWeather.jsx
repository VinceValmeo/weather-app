import React from "react";
import "./Current-Weather.css";
import WeatherDetail from "./WeatherDetail";
// import { icons } from "../../assets";

function CurrentWeather({ data }) {
  const country = data.city.split(",");
  const countryName = country[0];
  const countryCode = country[1].trim().toLowerCase();
  const flagElement = (
    <span className={`flag-icon flag-icon-${countryCode}`}></span>
  );
  console.log(country);
  return (
    <div className="CurrentWeather__container">
      <div className="weather__card">
        <div className="weather__card__top">
          <div className="weather__card__top__text">
            <span className="city">
              {countryName} {flagElement}
            </span>

            <p className="weather__description">
              {data.weather[0].description}
            </p>
          </div>
          {/* <img
            alt="weather icon"
            className="weather__icon"
            // src={`/icons/${data.weather[0].icon}.png`}
            // src={`icons/${data.weather[0].icon}.png`}
            // <%= console.log(data.weather[0].icon) =%>
            src={`./icons/${data.weather[0].icon}.png`}
      
          /> */}
          <p>{data.weather[0].icon}</p>
          <p>{`./icons/${data.weather[0].icon}.png`}</p>
          <img src={`src/assets/${data.weather[0].icon}.png`}/>
          

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
