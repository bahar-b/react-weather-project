import React from "react";
import HandleDate from "./HandleDate";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">
            <div className="weather-condition active">
              <h1>
                <span className="temperature">{props.data.temperature}</span>°
                <a href="/" className="celsius">
                  C
                </a>
                |°
                <a href="/" className="fahrenheit">
                  F
                </a>
              </h1>
              <h2>
                <span>{props.data.tempMin}</span>° /{" "}
                <span>{props.data.tempMax}</span>°
              </h2>
            </div>
          </div>
          <div className="col-6">
            <div className="icon-icon ">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="icon"
                id="icon"
              />
            </div>
            <div className="weather-description">{props.data.description}</div>
          </div>
        </div>
        <div className="row">
          <span className="location text-center">
            <span className="city"> {props.data.city}</span> ,
            <span className="country"> {props.data.country} </span>
          </span>
        </div>
        <div className="row upadting">
          <p>
            <HandleDate date={props.data.date} />
          </p>
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
              Open-source code on GitHub {""}
            </a>
            by Bahar
          </div>
        </div>
      </div>
    );
}