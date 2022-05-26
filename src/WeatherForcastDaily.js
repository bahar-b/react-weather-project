import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDaily(props) {
  function days() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return temp;
  }
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return temp;
  }
  return (
    <div className="WeatherFrocastDaily">
      <div className="days">{days()}</div>
      <WeatherIcon icons={props.data.weather[0].icon} size={55} />
      <div className="temps">
        <span>{minTemp()}</span> / <span>{maxTemp()}</span>
      </div>
    </div>
  );
}
