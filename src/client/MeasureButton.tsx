import React from "react";
import "./app.css";

export default function MeasureButton(props: []) {
  const units: string[] = ['c', 'f', 'k'];

  return (
    <div>
      <h1>Select your units</h1>
      <div className="dFlex justifyContentBetween w-300 m-40-auto">
        {units.map((unit, index) => (
          <button
            className="measuredButton"
            onClick={() => { props.setUnit(unit) }}
            key={index}
          >
            {unit.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
