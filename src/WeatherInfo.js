import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul>
        <li className="city">{props.data.city}</li>
        <li className="currentDay">
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <p className="description">{props.data.description}</p>
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="row">
        <div className="col-4">
          <ul className="humidity">
            <li>Humidity</li>
            <li className="numbers">{props.data.humidity}%</li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="wind">
            <li>Wind</li>
            <li className="numbers"> {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="feelsLike">
            <li>Feels like</li>
            <li className="numbers">{Math.round(props.data.feelslike)}°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
