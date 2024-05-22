<script setup>
import LocalDataApi from './components/LocalDataApi.vue';
import OpenWeatherApi from './components/OpenWeatherApi.vue';
</script>

<template>
  <div class="information">
    <h1>Weather Information</h1>
    <p>Below is the weather information from the OpenWeatherMap API and the local JSON file:</p>
    <button class="refreshBtn" @click="fetchData">Refresh Data</button>
  </div>
    <LocalDataApi />
    <OpenWeatherApi />
</template>
