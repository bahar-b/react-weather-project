import React from "react";
import axios from "axios";
import WeatherForcastDaily from  "./WeatherForcastDaily"

export default function WeatherForcast(props){
    function handleForcast(response){
        console.log(response);
    }
     const apiKey = "91934e5c6b2513459d447f16e53e860f";
     let longitude = props.coordinates.lon;
     let latitude = props.coordinates.lat;
     let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleForcast);
    return (
      <div className="WeatherForcast">
        <div className="row column-group">
          <div className="col forcast-columns">
              <WeatherForcastDaily />
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
      </div>
    );
}