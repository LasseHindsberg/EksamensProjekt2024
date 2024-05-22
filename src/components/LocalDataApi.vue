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
    
</script>

<template>
    <div class="localWeatherContainer">
        <h1>Local Sensor</h1>
        <ul v-for="(item, index) in dataList" :key="index">
            <li>
                <p>Temperature: {{  item.temperature }}°C </p>
            </li>
            <li>
                <p>Time: {{ item.time }}</p>
            </li>
            <li>
                <p>Humidity: {{ item.humidity }}%</p>
            </li>
        </ul>
    </div>
</template>


