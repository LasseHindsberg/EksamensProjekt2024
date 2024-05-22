<script setup>
import { ref } from 'vue';
import Axios from 'axios';

// Create a reactive variable to store the data
const dataList = ref([]);

// Fetch data from local JSON file

Axios.get('/src/data/data.json')
    .then(response => {
        dataList.value = response.data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    // Function to calculate the weather
    function calculateWeather(temperature, humidity) {
        if (temperature > 25 && humidity > 70) {
            return 'Hot and humid';
        } else if (temperature > 25 && humidity <= 70) {
            return 'Hot';
        } else if (temperature <= 25 && humidity > 70) {
            return 'Humid';
        } else {
            return 'Moderate';
        }
    }

    // Call the calculateWeather function for each item in the dataList
    dataList.value.forEach(item => {
        item.weather = calculateWeather(item.temperature, item.humidity);
    });
</script>

<template>
    <div class="localWeatherContainer">
        <h1>Local Sensor</h1>
        <ul class="localDataItem" v-for="(item, index) in dataList" :key="index">
                <h3>Time: {{ item.time }}</h3>
            <li>
                <p>Temperature: {{  item.temperature }}°C </p>
            </li>

            <li>
                <p>Humidity: {{ item.humidity }}%</p>
            </li>
            <br>
        </ul>
    </div>
</template>


