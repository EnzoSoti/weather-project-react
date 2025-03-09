// src/App.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import { getWeatherData, getForecastData } from './services/weatherService';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weather = await getWeatherData(city);
      setWeatherData(weather);
      
      const forecast = await getForecastData(city);
      setForecastData(forecast);
    } catch (err) {
      setError('City not found or API error. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather for default city on load
  useEffect(() => {
    fetchWeather('New York');
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
            <div className="card-header bg-primary text-white text-center py-3">
              <h1 className="h3 mb-0">Weather Dashboard</h1>
            </div>
            <div className="card-body p-4">
              <SearchBar onSearch={fetchWeather} />
              
              {/* Loading and error states */}
              {loading && (
                <div className="text-center my-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              {/* Weather content */}
              {weatherData && (
                <div className="mt-4">
                  <WeatherCard data={weatherData} />
                  <WeatherDetails data={weatherData} />
                  <Forecast data={forecastData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;