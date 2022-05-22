import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDaily(props) {
console.log(props);
  return (
    <div className="WeatherFrocastDaily">
      <div className="days">Sun,9</div>
      <WeatherIcon icons="01d" size={55} />
      <div className="temps">5 / 10</div>
    </div>
  );
}
