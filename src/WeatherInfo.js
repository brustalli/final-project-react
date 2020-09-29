import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <WeatherIcon code={props.data.icon} />
          <p className="description">{props.data.description}</p>
        </div>

        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <ul>
        <li className="city">{props.data.city}</li>
        <li className="currentDay">
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <ul>
        <li className="humidity">Humidity {props.data.humidity}%</li>
        <li className="wind">Wind {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
