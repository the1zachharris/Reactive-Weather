import React, { useState } from "react";
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import Form from "./components/Form";
import cities from "./data";

function App() {
  const [location, setLocation] = useState(cities[0].city);

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} data={cities} />
      <div className="app">

        {location ? <Location data={cities} location={location} setLocation={setLocation} />:cities.map((city) => (
          <WeatherCard city={city} />
        ))}

        
      </div>
    </>
  );
}

export default App;
