import React, { useContext } from "react";
import axios from "axios";
import { DataContext } from "../utils/context.jsx";

function Button(props) {
  const context = useContext(DataContext);
  function handleWeatherClick(event) {
    event.preventDefault();
    axios.get(`api/v1/forecast/${context.city}`).then((response) => {
      context.setLocationData(response.data);
      context.setRequestedDay(props.day);
    });
  }
  return (
    <div>
      <button
        day={props.day}
        location={context.city}
        className="action-button"
        onClick={() => {
          handleWeatherClick(event);
        }}
      >
        {props.day}
      </button>
    </div>
  );
}

export default Button;
