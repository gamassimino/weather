import React, { useState } from "react";
import "./app.css";

export default function SearchResult(props: []) {
  const [text, setText] = useState([]);

  const selectCity = (event) => {
    props.onSearchDone(event.target.value);
  };

  return (
    <div className="dFlex fColumn w-300 h-300 m-40-auto v-sroll position">
      {props.cities.map((city) => (
        <button 
          className="cityButton"
          onClick={selectCity}
          value={city.name}
          key={city.id}
        >
          {`${city.name}, ${city.state} ${city.country}`}
        </button>
      ))}
    </div>
  );
}
