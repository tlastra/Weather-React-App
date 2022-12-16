import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [temperature, setTempature] = useState();
  const [place, setCity] = useState();
  const [preview, setPreview] = useState(false);

  function showTemp(response) {
    setPreview(true);
    setTempature({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a32a92574243f77d3ebcc51cf8a19a88";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemp);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
      <input
        type="search"
        onChange={updateCity}
        placeholder="Enter your City"
        className="form-control"
        autoFocus="on"
      /></div>
      <div className="col-3">
      <input type="submit" value="Search" className="btn btn-primary w-100"/>
      </div>
      </div>
    </form>
  );
  if (preview) {
    return (
      <div className="current">
        {form}
        <h1>San Jose</h1>
        <ul>
          <li>Date: Today!</li>
          <li>Description: {temperature.description}</li>
        </ul>
        <div className="row">
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
    return form;
  }
}
