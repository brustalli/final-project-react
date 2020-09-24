import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <span className="currentTemperature">
            {Math.round(props.data.temperature)}
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
              src={props.data.iconUrl}
              alt={props.data.description}
              className="iconCurrentDay"
            />
          </p>
        </div>
        <div className="col-4">
          <ul>
            <li className="description">{props.data.description}</li>
            <li className="humidity">Humidity {props.data.humidity}%</li>
            <li className="wind">Wind {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>

      <ul>
        <li className="city">{props.data.city}</li>
        <li className="currentDay">
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
    </div>
  );
}
