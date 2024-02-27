import React from "react";
import Sunny from "../assets/Sunny.svg";
import Cloudy from "../assets/Cloudy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";
import Rainy from "../assets/Rainy.svg";

const forecast = new Map([
  ["Sunny", Sunny],
  ["Rainy", Rainy],
  ["Partly cloudy", PartlyCloudy],
  ["Cloudy", Cloudy],
  ["Snowy", Rainy],
]);

function WeatherCard(props) {
  console.log(props.city.forecast);

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={forecast.get(props.city.forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{props.city.city}</h3>
        <h5 className="card-text">{props.city.temperature}</h5>
        <h5 className="card-text">{props.city.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
module.exports = WeatherCard;
