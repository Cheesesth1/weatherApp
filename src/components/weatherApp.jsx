import React, { useState } from "react";
import "./WeatherApp.css";
import SunnyWeather from "./sunnyWeather";

function WeatherApp() {
  // Step 2: Set up initial state
  const [weatherData, setWeatherData] = useState({
    temperature: "58",
    description: "Mostly Clear",
    city: "San Francisco",
    condition: "sunny",
  });

  const getWeatherUI = () => {
    switch (weatherData.condition) {
      case "sunny":
        return <SunnyWeather />;

      default:
        return <p>Weather condition unknown</p>;
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="weather-info">
        <p>City: {weatherData.city}</p>
        <p>Temperature: {weatherData.temperature}°C</p>
        <p>Description: {weatherData.description}</p>
      </div>
      <div className="weather-condition">{getWeatherUI()}</div>
    </div>
  );
}

export default WeatherApp;
