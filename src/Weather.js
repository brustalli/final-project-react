import Axios from "axios";
import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "9c9113d065806620d583cdfa492f9ff6";
  let city = "Edinburgh";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <span className="currentTemperature">16</span>
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
            <img src="" alt="" className="iconCurrentDay" />
          </p>
        </div>
        <div className="col-4">
          <ul>
            <li className="description">Description</li>
            <li className="humidity">Humidity %</li>
            <li className="wind">Wind km/h</li>
          </ul>
        </div>
      </div>

      <ul>
        <li className="city">Edinburgh</li>
        <li className="currentDay">Monday</li>
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
}
