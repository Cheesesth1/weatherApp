import React, { useState } from "react";
import "./WeatherApp.css"; // Create a CSS file for styling

function WeatherApp() {
  // Step 2: Set up initial state
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    description: "",
    cityName: "City Name",
  });

  return (
    <div className="weather-app">
      <h1>{weatherData.cityName} Weather</h1>
      <div className="temperature">{weatherData.temperature}</div>
      <div className="description">{weatherData.description}</div>
      {/* Add weather condition UI elements here */}
    </div>
  );
}

export default WeatherApp;
