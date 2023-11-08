import "./App.css";
import Header from "./components/Header";
import WeatherSearch from "./components/WeatherSearch";
import { DataProvider } from "./utils/context";
import WeatherMain from "./components/WeatherMain";
import Graph from "./components/Graph";

function App() {
  return (
    <DataProvider>
      <div id="grid-container">
        <Header id="header" />
        <WeatherSearch id="weather-search" />
        <WeatherMain id="weather-main" />
        <Graph condition="temp" />
        <Graph condition="rain" />
        <Graph condition="wind" />
        <Graph condition="cloud" />
      </div>
    </DataProvider>
  );
}

export default App;

//<WeatherMain id="weather-main" />
//import Graph from "./components/Graph";
