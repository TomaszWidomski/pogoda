import React, { useContext } from "react";

import Button from "./Button";
import { DataContext } from "../utils/context.jsx";

function WeatherSearch() {
  const context = useContext(DataContext);
  return (
    <div>
      <div id="search-form">
        <form id="weather-form">
          <input
            id="weather-location"
            value={location.name}
            type="text"
            required
            placeholder={context.city ? context.city : "Enter your location"}
            onChange={(event) => context.setCityName(event)}
          />
        </form>
        <Button
          day="today"
          city={context.city}
          setLocation={context.setLocation}
        />
        <Button
          day="tomorrow"
          city={context.city}
          setLocation={context.setLocation}
        />
        <Button day="overmorrow" />
      </div>
    </div>
  );
}

export default WeatherSearch;
