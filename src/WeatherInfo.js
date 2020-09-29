import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <WeatherTemperature celsius={props.data.temperature} />
        <div className="col-4">
          <WeatherIcon code={props.data.icon} />
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
