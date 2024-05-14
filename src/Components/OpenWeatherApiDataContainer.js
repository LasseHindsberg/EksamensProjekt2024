import React, { useEffect, useState } from 'react';
import axios from 'axios';



const OpenWeatherApiDataContainer = () => {
    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.openweathermap.org/data/2.5/forecast',
                    {
                        params: {
                            q: 'roskilde,dk',
                            appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
                            cnt: 5, // Limit to 5 responses
                            units: 'metric', // Get data in metric units
                        },
                        
                    }
                );
                console.log('Weather data:', response.data.list)
                setForecastData(response.data.list);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 600000); // Fetch data every 10 minutes

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Hourly Weather Forecast for Roskilde, DK</h1>
            
            <ul>
                {forecastData.map((forecast) => (
                    <>
                    <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="Weather icon" />
                    <li key={forecast.dt}>Current Temperature: {forecast.main.temp}°C - {forecast.weather[0].description}</li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default OpenWeatherApiDataContainer;