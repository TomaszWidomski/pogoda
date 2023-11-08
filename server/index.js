import express from "express";
import fetch from "node-fetch";
import "dotenv/config";
const app = express();
const PORT = 5000;

app.all(["/api/v1/:city", "/api/v1/forecast/:city"], async (req, res, next) => {
  const url = `https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?format=json&city=${req.params.city}&polygon_threshold=0.0`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const isObjectEmpty = (result) => {
      return Object.keys(result).length === 0;
    };
    if (isObjectEmpty(result) === true) {
      req.lat = "0";
      req.lon = "0";
    } else {
      req.lat = result[0]["lat"];
      req.lon = result[0]["lon"];
    }
  } catch (error) {
    console.error(error);
    res.status(204);
  }
  next();
});

app.get("/api/v1/forecast/:city", async (req, res, next) => {
  const weather_url = "https://weatherapi-com.p.rapidapi.com/forecast.json?";
  const weather_options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(
      weather_url + `q=${req.lat},${req.lon}&days=3`,
      weather_options
    );
    const json = await response.json();

    res.json(json);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
