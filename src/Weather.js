import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <p className="currentTemperature">16°</p>
          <p className="units">
            <a href="#" className="active">
              C°
            </a>{" "}
            |
            <a href="#" className="fahrenheit">
              F°
            </a>
          </p>
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
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="city">Edinburgh</li>
            <li className="currentDay">Monday</li>
          </ul>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              autocomplete="off"
              placeholder="Type a city"
            />
          </div>
          <div className="col-4">
            <input className="btn btn-secondary" value="Search"></input>
          </div>
        </div>
      </form>
    </div>
  );
}
