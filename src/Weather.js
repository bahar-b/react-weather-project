import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import ReactLoading from "react-loading";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [load, setLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function showForcast(response) {
    setLoad(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function searchCity() {
    const apiKey = "91934e5c6b2513459d447f16e53e860f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForcast);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (load) {
    return (
      <div className="Weather">
        <form className="nosubmit" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search..."
            className="nosubmit"
            autocomplete="off"
            onChange={handleCity}
          />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    <ReactLoading
      className="d-flex flex-wrap content-center justify-center w-100 h-100"
      type="bubbles"
      color="#ffe168"
      height={667}
      width={375}
    />;
  }
}
