import React, { useEffect, useState } from "react";
import "./app.css";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

export type Weather = {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  dt: number;
  name: string;
};

export default function App() {
  const [result, setResult] = useState<Weather>();

  const onSearch = (query: string) => {
    fetch("/api/weather?q=" + encodeURIComponent(query))
      .then((res) => res.json())
      .then((data) => setResult(data));
  };

  useEffect(() => onSearch("San Francisco, CA, USA"), []);

  return (
    <div>
      <h1>Assemble Weather App</h1>

      <SearchBar onSearch={onSearch} />

      {result && <WeatherCard result={result} />}
    </div>
  );
}
