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
                            appid: Secrets.OPEN_WEATHER_API_KEY,
                            units: 'metric',
                            cnt: 5, // Limit to 5 responses
                        },
                    }
                );
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
                    <li key={forecast.dt}>{forecast.main.temp}°C - {forecast.weather[0].description}</li>
                ))}
            </ul>
        </div>
    );
};

export default OpenWeatherApiDataContainer;