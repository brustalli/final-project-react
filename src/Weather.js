import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherdata] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherdata({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                autoComplete="off"
                placeholder="Type a city"
                autoFocus="on"
              />
            </div>
            <div className="col-6">
              <button className="btn">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "9c9113d065806620d583cdfa492f9ff6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
