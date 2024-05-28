<script setup>
import { ref } from "vue";
import Axios from "axios";

// Create a reactive variable to store the data
const dataList = ref([]);

// Fetch data from local JSON file

Axios.get("/src/data/data.json")
	.then((response) => {
		dataList.value = response.data;
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});

// NEEDS DOING !!!!!!!!!
// Function to calculate the probability of accidents based on temperature and humidity
function calculateProbability(temperature, humidity) {
	if (temperature > 25 && humidity > 70) {
		return "Low chance of accidents, High temperature and humidity";
	} else if (temperature > 25 && humidity <= 70) {
		return "low chance of accidents, High temperature and low humidity";
	} else if (temperature <= 25 && humidity > 70) {
		return "Humid";
	} else {
		return "Low chance of accident";
	}
}
</script>

<template>
	<div class="localWeatherContainer">
		<h1>Local Sensor</h1>
		<ul class="localDataItem" v-for="(item, index) in dataList" :key="index">
			<h3 class="localTime">Time: {{ item.time }}</h3>
			<li>
				<p class="localTemperature">Temperature: {{ item.temperature }}°C</p>
			</li>

			<li>
				<p class="localHumidity">Humidity: {{ item.humidity }}%</p>
			</li>
			<li>
				<p class="localAccidentChance">Chance of accidents: {{ calculateProbability(item.temperature, item.humidity) }}</p>
			</li>
			<br />
		</ul>
	</div>
</template>
