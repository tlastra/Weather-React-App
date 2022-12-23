import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">DAY!</div>
          <WeatherIcon picture="01d" size={35} />
          <div className="Forecast-temps">
            <span className="Forecast-temps-max">MAX℃</span>
            <span className="Forecast-temps-min">MIN℃</span>
          </div>
        </div>
      </div>
    </div>
  );
}
