<template>
    <div>
        <ul>
            <li v-for="(item, index) in dataList" :key="index">
                Temperature: {{ item.temperature }}°C, Time: {{ item.time }}, Humidity: {{ item.humidity }}%
            </li>
        </ul>
    </div>
</template>

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
