import React, { useState } from "react";
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
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (preview) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temperature.temperature)}°C</li>
          <li>Description: {temperature.description}</li>
          <li>Humidity: {temperature.humidity}%</li>
          <li>Wind: {Math.round(temperature.wind)} km/h</li>
          <li>
            <img src={temperature.icon} alt={temperature.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
