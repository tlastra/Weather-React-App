import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./Date";
import axios from "axios";

export default function Weather() {
  const [temperature, setTempature] = useState({ ready : false });

  function handleResponse(response) {
    console.log(response);
    setTempature({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.main.name,
      unit: response.data.metric,
    });
  };
  if (temperature.ready) {
    return (
    <div className="current">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter your City" className="form-control" autoFocus="on"/>
          </div>
         <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
       </div>
      </form>
      <h1>{temperature.city}</h1>
      <ul>
          <li><FormattedDate date={temperature.date}/></li>
          <li className="text-capitalize">Description: {temperature.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
             <img src={temperature.icon} alt={temperature.description} className="float-left" />
            <div className="float-left">
             <span className="degrees">{Math.round(temperature.temperature)}</span>
             <span className="unit">°C</span>
            </div>
           </div>
          </div>
         <div className="col-6">
           <ul> 
          <li>Humidity: {temperature.humidity}%</li>
          <li>Wind: {Math.round(temperature.wind)} km/h</li>
           </ul>
          </div>
          </div>
    </div>
   );
  } else {
    const apiKey = "a32a92574243f77d3ebcc51cf8a19a88";
    let apiUrl = `https://current.openweathermap.org/data/2.5/weather?q=${temperature.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   }
  }
