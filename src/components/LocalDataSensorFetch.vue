<script>
import Axios from 'axios'

export default {
    setup() {
        const fetchData = async () => {
            try {
                const response = await.axious.get('Azure Database API Link')
            .then(response) => {
                console.log (response.data)                
            }}
             catch (error) { 
                console.error('error fetching data: ', error);
            }
                
            }
        }
    }
</script>
<template>
    <h1> Local Data Sensor &middot; Raspberry Pi </h1>
    <button @click="fetchData">Fetch Latest Data</button>
    <div class="dataContainer">
        <p> Time: {{ time }} </p>

</template>

