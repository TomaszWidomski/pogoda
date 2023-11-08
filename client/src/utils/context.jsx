import React, { createContext, useState } from "react";
const DataContext = createContext();

function DataProvider(props) {
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const [day, setDay] = useState("today");

  function setCityName(event) {
    setCity(event.target.value);
    console.log(city);
  }
  function setLocationData(data) {
    setData(data);
  }
  function requestData(day) {
    console.log("requesting data for " + day);
  }
  function setRequestedDay(day) {
    setDay(day);
  }

  const conditions = [];

  if (data && day === "today") {
    data.forecast.forecastday[0].hour.forEach((hour) => {
      conditions.push({
        temp: hour.temp_c,
        time: hour.time.split(" ")[1],
        rain: hour.precip_mm,
        wind: hour.wind_kph,
        cloud: hour.cloud,
      });
    });
  } else if (data && day === "tomorrow") {
    data.forecast.forecastday[1].hour.forEach((hour) => {
      conditions.push({
        temp: hour.temp_c,
        time: hour.time.split(" ")[1],
        rain: hour.precip_mm,
        wind: hour.wind_kph,
        cloud: hour.cloud,
      });
    });
  } else if (data && day === "overmorrow") {
    data.forecast.forecastday[2].hour.forEach((hour) => {
      conditions.push({
        temp: hour.temp_c,
        time: hour.time.split(" ")[1],
        rain: hour.precip_mm,
        wind: hour.wind_kph,
        cloud: hour.cloud,
      });
    });
  }
  const value = {
    city: city,
    setCityName: setCityName,
    setLocationData: setLocationData,
    setRequestedDay: setRequestedDay,
    data: data,
    requestData: requestData,
    day: day,
    conditions: conditions,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
export { DataContext, DataProvider };
