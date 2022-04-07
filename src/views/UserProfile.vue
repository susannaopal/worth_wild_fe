<script>
  import { RouterLink } from "vue-router";
  import NavBar from '../components/NavBar.vue';
  import { store } from "../store.js"
  import AnimalCard from '../components/AnimalCard.vue'

  export default {
    data () {
      return {
        store
      }
    },
    methods: {
      capitalizeName(string) {
        const splitString = string.split(' ')
        const capitalizedWords = splitString.map( word =>  {
          return word.charAt(0).toUpperCase() + word.slice(1)
        })
        return capitalizedWords.join(' ')
      },
    }
  }
</script>

<template>
  <body>
    <NavBar />
    <section class="user-info-section">
      <h3 v-if="store">Welcome {{ store.user.attributes.first_name }}!</h3>
    </section>
    <h2>Favorites:</h2>
    <div class="favs-labels-container">
      <h3 class="label">Common Name</h3>
      <h3 class="label">Scientific Name</h3>
      <h3 class="label">Population Size</h3>
    </div>
    <section class="user-favorite-animals-sec">
      <AnimalCard 
        v-for="(animal) in store.favorites"
        :commonName="animal.common_name"
        :scientificName="animal.scientific_name"
        :gRankReasons="animal.pop_size  "
        :id="animal.element_code"
        :key="animal.element_code"
      />
    </section>
  </body>
</template>

<style>
  .user-info-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    margin: 30px 0px;
    padding: 20px;
    border: 3px solid #526625;
    border-radius: 25px;
    background-color: #556D1D;
    color: #E9E7DD;
    font-size: 30px;
  }

  .favs-labels-container {
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-gap: 16%;
    width: 100vw;
    margin: 40px 0px 10px 400px;
  }

  .user-favorite-animals-sec {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #E9E7DD;
    border: 3px solid #C8C097;
    border-radius: 35px;
    width: 95vw;
    height: 100%;
    margin: 15px 0px;
  }

  .grid {
    display: grid;
  }

  .animal-card {
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-gap: 22%;
    height: 100px;
    width: 95%;
    border-bottom: 3px solid #C8C097;
  }

  h2 {
    font-size: 35px;
    color: #432A0B;
    margin: 0;
  }
</style>