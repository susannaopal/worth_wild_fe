<script>
  import router from "../router/index";
  import { store } from '../store.js';

  export default {
    props: ['commonName', 'scientificName', 'gRankReasons', 'id'],
    methods: {
      async fetchAnimalDetails(name, id) {
        const res = await fetch(`https://secure-island-06435.herokuapp.com/api/v1/animal?common_name=${name}&element_code=${id}`)
        if (!res.ok){
          store.error = res.statusText
        } else {
          const data = await res.json();
          store.animalDetails = data;
          store.error = '';
          router.push('/details')
        }
      }       
    }
  }
</script>

<template>
  <div @click="fetchAnimalDetails(commonName, id)" class="card-div">
    <div class="animal-card-link">
      <p>{{ commonName }}</p>
      <p>{{ scientificName }}</p>
      <p>{{ gRankReasons }}</p>
    </div>
  </div>
  <div class="line"></div>
</template>

<style>
  .card-div {
    width: 95%;
  }

  .card-div:hover {
    background-color: #bccf8f;
    transform: scale(1.1);
    cursor: pointer;
  }

  .animal-card-link {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 25%;
    height: 10%;
    width: 95%;
    color: #432A0B;
  }

  .line {
    border: 1px solid #c8c097;
    width: 90%;
  }
</style>