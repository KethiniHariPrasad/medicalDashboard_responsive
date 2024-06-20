import React from "react";
import "./labTests.css";

export default function TestTabs(props) {
  return (
    <div className="gridItem">
      <img className="testImage" src={props.img} alt={props.alt} />
      <p>{props.title}</p>
    </div>
  );
}
