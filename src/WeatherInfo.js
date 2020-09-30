import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <FormattedDate date={props.data.date} />
      <spam className="description">{props.data.description}</spam>
      <WeatherIcon code={props.data.icon} />
      <div className="row">
        <div className="col-6">
          <spam className="city">{props.data.city}</spam>
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
