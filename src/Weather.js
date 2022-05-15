import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import ReactLoading from "react-loading";

export default function Weather() {
  const [load, setLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function showForcast(response) {
    console.log(response.data);
    setLoad(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      icon: "http://openweathermap.org/img/wn/04d@2x.png",
      date: "6:30 AM",
    });
  }
  if (load) {
    return (
      <div className="Weather">
        <form className="nosubmit ">
          <input
            type="search"
            placeholder="Search..."
            className="nosubmit"
            autocomplete="off"
          />
        </form>
        <div className="row">
          <div className="col-6">
            <div className="weather-condition active">
              <h1>
                <span className="temperature">{weatherData.temperature}</span>°
                <a href="/" className="celsius">
                  C
                </a>
                |°
                <a href="/" className="fahrenheit">
                  F
                </a>
              </h1>
              <h2>
                <span>{weatherData.tempMin}</span>° /{" "}
                <span>{weatherData.tempMax}</span>°
              </h2>
            </div>
          </div>
          <div className="col-6">
            <div className="icon-icon ">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="icon"
                id="icon"
              />
            </div>
            <div className="weather-description">{weatherData.description}</div>
          </div>
        </div>
        <div className="row">
          <span className="location text-center">
            <span className="city"> {weatherData.city}</span> ,
            <span className="country"> {weatherData.country} </span>
          </span>
        </div>
        <div className="row upadting">
          <p>Updated {weatherData.date}</p>
        </div>
        <div className="row align-items-start column-group">
          <div className="col forcast-columns">
            Sun,9
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
            <br />5 / 10
          </div>
          <div className="col forcast-columns">
            Mon,10
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
            <br />9 / 13
          </div>
          <div className="col forcast-columns">
            Tue,11
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
            <br />
            11 / 17
          </div>
          <div className="col forcast-columns">
            Wed,12
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
            <br />
            6/ 9
          </div>
          <div className="col forcast-columns">
            Thu,13
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
            <br />
            12/ 15
          </div>
        </div>
        <div className="forcast-weather">
          <div className="source-code">
            <a href="https://github.com/bahar-b/" target="-blank" class="link">
              Open-source code {""}
            </a>
            by Bahar
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "91934e5c6b2513459d447f16e53e860f";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForcast);
    <ReactLoading
      type="bubbles"
      color="#ffe168"
      height={"20%"}
      width={"20%"}
    />;
  }
}
