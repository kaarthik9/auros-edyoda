import React from "react";
import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className={"jumbotron " + styles.jumbotron}>
      <h1 className="display-4">Hey, Fellas!</h1>
      <p className="lead">
        Shopping for home furniture? Well, you've come to the right place. 
      </p>
      <hr className="my-4" />
      <p>
      Here at Auros, you can find awesome stuff at affordable prices.
      </p>
      <p className="lead">
        <Link to="/shop" className="btn btn-outline-dark btn-lg" href="#" role="button">
          Shop Now
        </Link>
      </p>
    </div>
  );
}
