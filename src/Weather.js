import React, { useState } from "react";
import axios from "axios";
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
      date: "Wednesday",
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-4">
            <span className="currentTemperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">
              <a href="#" className="active">
                C°
              </a>{" "}
              |{" "}
              <a href="#" className="fahrenheit">
                F°
              </a>
            </span>
          </div>
          <div className="col-4">
            <p className="iconCurrentBox">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="iconCurrentDay"
              />
            </p>
          </div>
          <div className="col-4">
            <ul>
              <li className="description">{weatherData.description}</li>
              <li className="humidity">Humidity {weatherData.humidity}%</li>
              <li className="wind">Wind {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>

        <ul>
          <li className="city">{weatherData.city}</li>
          <li className="currentDay">{weatherData.date}</li>
        </ul>
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
