import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  /*let[weatherData, useweatherData]=useState("")*/
  function showForcast(response) {
    console.log(response.data);
  }
  let city = "london";
  let apiKey = "f4b1f66f2740e2f7de52217f63b4f85a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForcast);
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
              <span className="temperature"> 5 </span>°
              <a href="/" className="celsius">
                C
              </a>
              |°
              <a href="/" className="fahrenheit">
                F
              </a>
            </h1>
            <h2>
              <span>10</span>° / <span>13</span>°
            </h2>
          </div>
        </div>
        <div className="col-6">
          <div className="icon-icon ">
            <img
              className="icon"
              id="icon"
              alt="Mostly cloudy"
              src="http://openweathermap.org/img/wn/04d@2x.png"
            />
          </div>
          <div className="weather-description">clear</div>
        </div>
      </div>
      <div className="row">
        <span className="location text-center">
          <span className="city"> Tehran</span> ,
          <span className="country"> Iran </span>
        </span>
      </div>
      <div className="row upadting">
        <p>Updated 6:30 AM</p>
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
}
