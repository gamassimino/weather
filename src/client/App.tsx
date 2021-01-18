import React, { useEffect, useState } from "react";
import "./app.css";
import LatestQueries from "./LatestQueries";
import MeasureButton from "./MeasureButton";
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

export type Search = {
  list: Array<Weather>;
  max: number;
  min: number;
};

export default function App() {
  const [result, setResult] = useState<Weather>();
  const [unit, setUnit] = useState("c");
  const [searchs, setSearchs] = useState<Search>({
    list: [],
    max: 0,
    min: 1000,
  });

  const onSearch = (query: string) => {
    fetch("/api/weather?q=" + encodeURIComponent(query))
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setSearchs({
          list: [...searchs.list, data],
          max: Math.max(data.main.temp, searchs.max),
          min: Math.min(data.main.temp, searchs.min),
        });
      });
  };

  useEffect(() => onSearch("San Francisco, CA, USA"), []);

  const getMax = () => {
    Math.max(10, 20);
  };

  return (
    <div>
      <h1>Assemble Weather App</h1>

      <SearchBar onSearch={onSearch} />

      <MeasureButton setUnit={setUnit}/>

      {result && <WeatherCard result={result} unit={unit} />}

      {searchs && <LatestQueries searchs={searchs} unit={unit} />}
    </div>
  );
}
