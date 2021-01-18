import React from "react";
import { Weather } from "./App";
import "./app.css";

type Props = {
  result: Weather;
};

export default function WeatherCard(props: Props) {
  const { result, unit, max, min } = props;

  const temperature = (temp) => {
    switch (unit) {
      case "c":
        return `${(temp - 273.15).toFixed(2)} ° C`;
      case "f":
        return `${(temp - 273.15 + 32).toFixed(2)} ° F`;
      default:
        return `${temp.toFixed(2)} ° K`;
    }
  };

  const weatherCardClass = () => {
    switch (result.main.temp) {
      case min:
        return "weatherCard blueBorder";
      case max:
        return "weatherCard redBorder";
      default:
        return "weatherCard";
    }
  };

  return (
    <div className={weatherCardClass()}>
      <div style={{ fontSize: 18 }}>{result.name}</div>

      <img
        src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`}
      />

      <div style={{ fontSize: 12 }}>{result.weather[0].main}</div>

      <div style={{ marginTop: 8, fontSize: 24 }}>
        {temperature(result.main.temp)}
      </div>
    </div>
  );
}
