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
                        params: { // defining parameters that are sent with the fetch call
                            q: 'roskilde,dk', // City and country code
                            appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY, // secret API key stored in a local environment file
                            units: 'metric', // ensures the data temperature is in Celsius
                            cnt: 5, // Limit to 5 responses, in our case the next 5 hours
                        },
                        
                    }
                );
                // sets the api response to our state.
                setForecastData(response.data.list);
                // logs the response for trouble shooting.
                console.log(response.data.list)
                // in case of errors: catch and log them.
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        // runs fetch function
        fetchData();
        // sets an interval to run the fetch function every 10 minutes
        const interval = setInterval(fetchData, 600000);

        // cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="apiContentWrapper">
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