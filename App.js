import React, { useState } from "react";
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import cities from "./data";

function App() {
  const [location, setLocation] = useState(cities[0]);

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {/* {cities.map((city) => (
          <WeatherCard city={city} />
        ))} */}
        {
          <Location
            data={cities}
            location={location}
            setLocation={setLocation}
          />
        }
      </div>
    </>
  );
}

export default App;
