import React from "react";
import "./app.css";
import WeatherCard from "./WeatherCard";

export default function LatestQueries(props: []) {

  return (
    <div>
      <h1>Latest queries</h1>
      <div className="dFlex justifyContentBetween">
        {props.searchs.list.map((query, index) => (
          <WeatherCard
            result={query}
            unit={props.unit}
            key={index}
            max={props.searchs.max}
            min={props.searchs.min}
          />
        ))}
      </div>
    </div>
  );
}
