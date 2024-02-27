import React from "react";
import Sunny from "../assets/Sunny.svg";
import Cloudy from "../assets/Cloudy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";
import Rainy from "../assets/Rainy.svg";

function Location({ data, location, setLocation }) {

  const forecast = new Map([
    ["Sunny", Sunny],
    ["Rainy", Rainy],
    ["Partly cloudy", PartlyCloudy],
    ["Cloudy", Cloudy],
    ["Snowy", Rainy],
  ]);

  const city = data.find((city) => city === location)

  return (
    <div className="card">
      <h3>Your locations weather</h3>
      <div className="img-container">
        <img
          className="card-img-top"
          src={forecast.get(city.forecast)}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

module.exports = Location;
