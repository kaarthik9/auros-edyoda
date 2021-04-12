import React from "react";
import styles from "./HeroSmall.module.css"

export default function HeroSmall() {
  return (
    <div className={"jumbotron jumbotron-fluid "+styles.heroSmall}>
      <div className="container">
        <h1 className="display-4">Stylish Products</h1>
        <p className="lead font-weight-normal font-italic">
          Find a bright ideal to suit your taste with our great selection of
          suspension, wall, floor and table lights.
        </p>
      </div>
    </div>
  );
}
