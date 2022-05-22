import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("Celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }
  function fahrenheit() {
    return Math.round((props.units.temperature * 9) / 5 + 32);
  }
  if (unit === "Celsius") {
    return (
      <div className="WeatherUnits">
        <h1>
          <span className="temperature">{props.units.temperature}</span>°
          <a href="/" className="celsius">
            C
          </a>
          |°
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            F
          </a>
        </h1>
        <h2>
          <span>{props.units.tempMin}</span>° /{" "}
          <span>{props.units.tempMax}</span>°
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <h1>
          <span className="temperature">{fahrenheit()}</span>°
          <a href="/" className="celsius" onClick={showCelsius}>
            C
          </a>
          |°
          <a href="/" className="fahrenheit">
            F
          </a>
        </h1>
        <h2>
          <span>{props.units.tempMin}</span>° /{" "}
          <span>{props.units.tempMax}</span>°
        </h2>
      </div>
    );
  }
}
