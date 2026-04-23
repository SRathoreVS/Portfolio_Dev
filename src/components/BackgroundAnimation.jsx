import React from "react";
import "../css/BackgroundAnimation.css";

export default function BackgroundAnimation() {
  return (
    <div className="background-wrapper">
      <div className="area">
        <ul className="circles">
          {[...Array(10)].map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
    </div>
  );
}