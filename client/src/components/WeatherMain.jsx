import React, { useContext } from "react";
import { arrow, questionMark } from "../public/index.js";
import { DataContext } from "../utils/context.jsx";
import { windDirections } from "../utils/wind-directions.js";

function WeatherMain() {
  const context = useContext(DataContext);
  let temp = 0;
  let wind = "";
  let wind_direction = "";
  let image = "";
  if (context.day === "today" && context.data) {
    wind = context.data.current.wind_kph;
    temp = context.data.current.temp_c;
    wind_direction = context.data.current.wind_dir;
    image = context.data.current.condition.icon;
  } else if (context.day === "tomorrow" && context.data) {
    wind = context.data.forecast.forecastday[1].day.maxwind_kph;
    temp = context.data.forecast.forecastday[1].day.maxtemp_c;
    wind_direction = context.data.forecast.forecastday[1].hour[12].wind_dir;
    image = context.data.forecast.forecastday[1].day.condition.icon;
  } else if (context.day === "overmorrow" && context.data) {
    wind = context.data.forecast.forecastday[2].day.avgtemp_c;
    temp = context.data.forecast.forecastday[2].day.maxtemp_c;
    wind_direction = context.data.forecast.forecastday[2].hour[12].wind_dir;
    image = context.data.forecast.forecastday[2].day.condition.icon;
  } else {
  }
  const styles = {
    transform: `rotate(${windDirections[wind_direction]}deg)`,
  };
  return (
    <div>
      <div id="current-weather">
        <div id="current-location">
          {context.data ? context.data.location.name : ""}
        </div>
        <div id="current-temp">
          {temp} <sup>°</sup>C
        </div>
        <div id="current-wind">
          {wind}
          km/h
        </div>
        <div id="current-wind-direction"> {wind_direction}</div>
        <div id="wind-arrow" style={styles}>
          <img
            id="arrow-image"
            src={arrow}
            width="100px"
            height="100px"
            alt=""
          />
        </div>
        <div id="current-img">
          <img
            id="current-location-image"
            src={image ? image : questionMark}
            alt="current weather"
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherMain;
