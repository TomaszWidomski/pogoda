





import Chart from "chart.js/auto";
import { windDirections } from "./wind-directions";
let dataset = [];

export async function getWeather() {
  const location = document
    .querySelector("#weather-location")
    .value.toLowerCase();
  const response = await fetch(`weather/${location}`);
  const json = await response.json();
  if (json.location) {
    document
      .querySelector("#current-location-image")
      .setAttribute("src", json.current.condition.icon);
    document.querySelector(
      "#current-location"
    ).textContent = `${json.location.name}, ${json.location.country}`;
    document.querySelector(
      "#current-temp"
    ).innerHTML = `<div>${json.current.temp_c} <sup>°</sup>C</div>`;
    document.querySelector(
      "#current-wind"
    ).textContent = `${json.current.gust_kph} km/h`;
  }
  const arrowImage = document.querySelector("#arrow-image");
  arrowImage.style.transform = `rotate(${
    windDirections[json.current.wind_dir]
  }deg)`;
}

export async function getForecast() {
  dataset = [];
  const location = document
    .querySelector("#weather-location")
    .value.toLowerCase();
  const response = await fetch(`forecast/${location}`);
  const json = await response.json();
  dataset = json.forecast.forecastday[0].hour;

  showHourlyWeather();
  showRainfall();
}

export function showHourlyWeather() {
  const canvas = document.querySelector("#canvas");
  const canvasChild = document.querySelector("#chart-1");
  canvas.removeChild(canvasChild);
  canvas.insertAdjacentHTML("afterbegin", `<canvas id="chart-1" ></canvas>`);
  const mychart = new Chart(document.querySelector("#chart-1"), {
    type: "line",
    data: {
      labels: dataset.map((row) => {
        return row.time.split(" ")[1];
      }),
      datasets: [
        {
          label: "Temperature",
          data: dataset.map((row) => row.temp_c),
          backgroundColor: "yellow",
          borderColor: "black",
          hoverBackgroundColor: "red",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: 24,
            },
          },
        },
      },
    },
  });
  mychart.update();
}

export function showRainfall() {
  const canvas = document.querySelector("#canvas-2");

  const canvasChild = document.querySelector("#chart-2");
  canvas.removeChild(canvasChild);

  canvas.insertAdjacentHTML("beforeend", `<canvas id="chart-2" ></canvas>`);

  const mychart = new Chart(document.querySelector("#chart-2"), {
    type: "line",
    data: {
      labels: dataset.map((row) => {
        return row.time.split(" ")[1];
      }),
      datasets: [
        {
          label: "Rain in mm",
          data: dataset.map((row) => row.precip_mm),
          backgroundColor: "blue",
          borderColor: "black",
          hoverBackgroundColor: "red",
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 24,
            },
          },
        },
      },
    },
  });
  mychart.update();
}
