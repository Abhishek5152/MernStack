import { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInfo';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch('API_URL')
      .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);

  return (
    <div>
      <h2>Weather App</h2>
      {weatherData.map(weather => (
        <WeatherInfo 
          key={weather.city} 
          city={weather.city} 
          temperature={weather.temperature} 
          description={weather.description} 
        />
      ))}
    </div>
  );
}

export default WeatherApp;
