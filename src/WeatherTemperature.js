import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {
    return (
      <div className="col-4">
        <span className="currentTemperature">{Math.round(props.celsius)}</span>
        <spam className="units">C° | </spam>{" "}
        <a href="/" className="units" onClick={showFahrenheit}>
          F°
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="col-4">
        <span className="currentTemperature">{Math.round(fahrenheit)}</span>
        <a href="/" className="units" onClick={showCelsius}>
          C° |
        </a>{" "}
        <spam className="units">F°</spam>
      </div>
    );
  }
}
