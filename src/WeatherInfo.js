import React from "react";
import HandleDate from "./HandleDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";
import WeatherForcast from "./WeatherForcast";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">
            <div className="weather-condition active">
              <WeatherUnits units={props.data}/>
            </div>
          </div>
          <div className="col-6">
            <div className="icon-icon ">
                <div className="icon">
                    <WeatherIcon icons={props.data.icon} size={62}/>
                </div>
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
        <WeatherForcast coordinates={props.data.coordinate}/>
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