<script setup>
</script>

<script>
  import { RouterLink } from "vue-router";
  import { store } from '../store.js';
  export default {
    props: ['commonName', 'scientificName', 'gRankReasons', 'id'],
    methods: {
      async fetchAnimalDetails(name, id) {
        console.log('fetch call', name)
      const res = await fetch(`https://secure-island-06435.herokuapp.com/api/v1/animal?common_name=${name}&element_code=${id}`)
        if (!res.ok){
          store.error = res.statusText
        } else {
          const data = await res.json();
          console.log('data', data)
          store.animalDetails = data.data;
          store.error = '';
        }
      }
    }

  }
</script>


<template>
  <div class="card-div">
    <RouterLink @click.prevent="fetchAnimalDetails(commonName, id)" to="/details" class="animal-card-link">
      <p>{{ commonName }}</p>
      <p>{{ scientificName }}</p>
      <p>{{ gRankReasons }}</p>
    </RouterLink>
  </div>
  <div class="line"></div>
</template>

<style>
  .card-div {
    width: 95%;
    margin-left: 70px;
  }

  .card-div:hover {
    background-color: #bccf8f;
    transform: scale(1.1);
    cursor: pointer;
  }

  .animal-card-link {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 22%;
    height: 10%;
    width: 95%;
    color: #432A0B;
  }

  .line {
    border: 1px solid #c8c097;
    width: 90%;
  }
</style>