import React from "react";
import { Weather } from "./App";
import "./app.css";

type Props = {
  result: Weather;
};

export default function WeatherCard(props: Props) {
  const { result } = props;

  return (
    <div className="weatherCard">
      <div style={{ fontSize: 18 }}>{result.name}</div>

      <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} />

      <div style={{ fontSize: 12 }}>{result.weather[0].main}</div>

      <div style={{ marginTop: 8, fontSize: 24 }}>{result.main.temp}° K</div>
    </div>
  );
}
