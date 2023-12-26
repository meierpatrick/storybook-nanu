<template>
        <div>
    <h1>Hallo Welt!</h1>
    <h1 v-if="cryptocurrencies" :items="cryptocurrencies" hover></h1>
    <div v-else>
      Loading data...
    </div>  </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  import { topCryptocurrencies } from "../api/topCryptocurrencies";
  
  export default {
    name: 'YourComponentName',
  
    setup() {
      const cryptocurrencies = ref(null);
  
      async function fetchCryptocurrencies() {
        try {
          const data = await topCryptocurrencies();
          cryptocurrencies.value = data;
          console.log("Verify top Cryptocurrencies:", data);
        } catch (error) {
          console.error("Error fetching cryptocurrencies:", error);
        }
      }
  
      onMounted(fetchCryptocurrencies);
  
      return {
        cryptocurrencies,
      };
    },
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>
  