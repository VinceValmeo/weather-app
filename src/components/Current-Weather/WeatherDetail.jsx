import React from "react";
import "./Current-Weather.css";

function WeatherDetail(props) {
  return (
    <div>
      {" "}
      <div className="parameter__row">
        <span className="parameter__label">{props.label}</span>
        <span className="parameter__value">{props.value}</span>
      </div>
    </div>
  );
}

export default WeatherDetail;
