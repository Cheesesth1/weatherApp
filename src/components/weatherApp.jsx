import React, { useState } from "react";
import "./WeatherApp.css";
import SunnyWeather from "./sunnyWeather";
import RainyWeather from "./rainyWeather";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    temperature: "",
    description: "",
    city: "Default City",
    condition: "",
  });

  const changeWeatherCondition = (condition) => {
    let newWeatherData;
    if (condition === "sunny") {
      newWeatherData = {
        temperature: "25",
        description: "TOO MUCH SUN",
        city: "San FRancisco",
        condition: "sunny",
      };
    } else if (condition === "rainy") {
      newWeatherData = {
        temperature: "15",
        description: "RAIN RAIN",
        city: "Newyork",
        condition: "rainy",
      };
    }
    setWeatherData(newWeatherData);
  };

  const getBackgroundImage = () => {
    if (weatherData.condition === "sunny") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzmmQqm3IIUrvyLWFxUPKYlXL_Rn-7BwvZQ&usqp=CAU";
    } else if (weatherData.condition === "rainy") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6XHbmBrdDFgH_meWwjA1QbJN-kYF54ycVw&usqp=CAU";
    }
    return "https://i.pinimg.com/originals/75/b3/3e/75b33e0bfbc8b13cd646dca30511f30a.jpg";
  };

  const backgroundStyle = {
    backgroundImage: `url(${getBackgroundImage()})`,
  };

  return (
    <div className="weather-app" style={backgroundStyle}>
      <h1>Weather App</h1>
      <div className="weatherInfo">
        <p>City: {weatherData.city}</p>
        <p>Temperature: {weatherData.temperature}°C</p>
        <p>Description: {weatherData.description}</p>
      </div>
      <div className="weatherCondition">
        {weatherData.condition === "sunny" && <SunnyWeather />}
        {weatherData.condition === "rainy" && <RainyWeather />}
      </div>
      <div className="weatherButtons">
        <button onClick={() => changeWeatherCondition("sunny")}>SF</button>
        <button onClick={() => changeWeatherCondition("rainy")}>NY</button>
      </div>
    </div>
  );
}

export default WeatherApp;
