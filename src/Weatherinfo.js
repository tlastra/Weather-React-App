import React from "react";
import FormattedDate from "./Date";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="Weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weatherData.date} />
        </li>
        <li className="text-capitalize">
          Description: {props.weatherData.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code="{props.weatherData.con}" />
            </div>
            <div className="float-left">
              <span className="degrees">
                {Math.round(props.weatherData.props.weatherData)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.weatherData.humidity}%</li>
            <li>Wind: {Math.round(props.weatherData.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
