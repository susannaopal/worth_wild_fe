<script>
  import { RouterLink } from "vue-router";
  import NavBar from '../components/NavBar.vue';
  import { store } from "../store.js"

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
      }
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
      <div class="animal-card">
        <p class="animal-details-p">{{ this.capitalizeName(store.user.attributes.animals[0].common_name) }}</p>
        <p class="animal-details-p">{{ this.capitalizeName(store.user.attributes.animals[0].scientific_name) }}</p>
        <p class="animal-details-p">{{ this.capitalizeName(store.user.attributes.animals[0].pop_size) }}</p>
      </div>
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
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
  }

  .user-favorite-animals-sec {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 95vw;
    height: 75vh;
    margin: 15px 0px;
    background-color: #E9E7DD;
    border: 3px solid #C8C097;
    border-radius: 35px;
  }

  .animal-card {
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-gap: 22%;
    height: 100px;
    width: 95%;
    border-bottom: 3px solid #C8C097;
  }

  .animal-details-p {
    margin-left: 70px;
  }

  h2 {
    font-size: 35px;
    color: #432A0B;
    margin: 0;
  }
</style>