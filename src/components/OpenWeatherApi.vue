<script setup>
import Axios from "axios";
import { ref } from "vue";

// Import environment variables
const API_KEY = import.meta.env.VITE_APP_OPENWEATHERMAP_API_KEY;
// Create a reactive variable to store the weather data
let weatherData = ref([]);

// Fetch the weather data from the OpenWeatherMap API
const fetchData = async () => {
	try {
		const response = await Axios.get("https://api.openweathermap.org/data/2.5/forecast", {
			params: {
				q: "roskilde,dk",
				appid: API_KEY,
				units: "metric",
				cnt: 5,
			},
		});

		// Process the response data
		const { list } = response.data;
		const data = list.map((item) => ({
			time: item.dt_txt,
			temperature: item.main.temp,
			humidity: item.main.humidity,
			weather: item.weather[0].description,
		}));

		// Update the data in the component
		weatherData.value = data;
	} catch (error) {
		console.error(error);
	}
};
// Fetch the data when the component is mounted
fetchData();
</script>

<template>
	<div class="remoteWeatherContainer">
		<h1>OpenWeatherMap API</h1>

		<ul class="remoteDataItem" v-for="(data, index) in weatherData" :key="index">
			<h3 class="RemoteTime">Time: {{ data.time }}</h3>
			<li>
				<p class="RemoteTemperature">Temperature: {{ data.temperature }}</p>
			</li>
			<li>
				<p class="RemoteHumidity">Humidity: {{ data.humidity }}</p>
			</li>
			<li>
				<p class="RemoteWeather">Weather: {{ data.weather }}</p>
			</li>
			<br />
		</ul>
	</div>
</template>
