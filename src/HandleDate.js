import React from "react";

export default function HandleDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedensday",
    "Thursday",
    "Friday",
    "Saterday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if(hours<10){
      hours = `0${hours}`
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return(
      <div className="HandleDate d-inline">
         {day} {hours}:{minutes}
      </div>
  );
}
