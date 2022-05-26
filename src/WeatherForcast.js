import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForcastDaily from "./WeatherForcastDaily";
import ReactLoading from "react-loading";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForacast] = useState("");
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  function handleForcast(response) {
    setLoaded(true);
    setForacast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="WeatherForcast">
        <div className="row column-group">
          {forcast.map(function (dailyFrocast, index) {
            if (index < 5) {
              return (
                <div className="col forcast-columns">
                  <WeatherForcastDaily data={dailyFrocast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "91934e5c6b2513459d447f16e53e860f";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForcast);
   return (
     <ReactLoading
       className="d-flex flex-wrap content-center justify-center w-100 h-100"
       type="bubbles"
       color="#ffe168"
       height={135}
       width={115}
     />
   );
  }
}
