import React, { useEffect, useState } from 'react';
import cold from '../image/cold.png';
import mild from '../image/mild.png';
import sunny from '../image/sunny.png';
import c from '../image/c.png';
import f from '../image/f.png';


import './Weather.css'; 

export const Weather = () => {
  const [temperature, setTemperature] = useState(null);
  const [ftemperature, setFtemperature] = useState(null);
  const [weatherImage, setWeatherImage] = useState(null);
  const [isTemperatureSelected, setIsTemperatureSelected] = useState(true); 

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Surat,india&APPID=c70084a5e8a2058ce8a54ff0f61a4afe&units=metric')
      .then((response) => response.json())
      .then((data) => {
        const temp = data.main.temp;
        setTemperature(temp);

        const fTemp = temp * 1.8 + 32;
        setFtemperature(fTemp);

        if (temp < 10) {
          setWeatherImage(cold);
        } else if (temp > 10 && temp < 20) {
          setWeatherImage(mild);
        } else {
          setWeatherImage(sunny);
        }
      });
  },);

  const handleImageClick = (isTempSelected) => {
    setIsTemperatureSelected(isTempSelected);
  };

  return (
    <div className="weather-container">
      {weatherImage && <img src={weatherImage} alt="Weather" className="weather-image" />}
      {isTemperatureSelected ? (
        <p className="temperature">{temperature}°C</p>
      ) : (
        <p className="temperature">{ftemperature}°F</p>
      )}

      
      <div className="image-buttons">
        <img
          src={c} 
          className="celsius-image"
          onClick={() => handleImageClick(true)}
        />
        <img
          src={f} 
          className="Fahrenheit-image"

          onClick={() => handleImageClick(false)}
        />
      </div>
    </div>
  );
};

export default Weather;
