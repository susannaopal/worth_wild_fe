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
    <section class="user-favorite-animals">
      <div class="animal-card">
        <p>Common Name: {{ this.capitalizeName(store.user.attributes.animals[0].common_name) }}</p>
        <p>Scientific Name: {{ this.capitalizeName(store.user.attributes.animals[0].scientific_name) }}</p>
        <p>Population Size: {{ this.capitalizeName(store.user.attributes.animals[0].pop_size) }}</p>
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
    margin-top: 15px;
    padding: 20px;
    border: 3px solid #526625;
    border-radius: 25px;
    background-color: #556D1D;
    color: #E9E7DD;
    font-size: 30px;
  }

  .user-favorite-animals {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 95vw;
    background-color: #E9E7DD;
    border: 3px solid #C8C097;
    border-radius: 35px;
  }

.animal-card {
   display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 95%;
  background-color:#556D1D;
  border-radius: 25px;
  /* color: #556D1D; */
  /* border: 3px solid #3b4b13; */
  border: 3px solid #526625;
  margin: 35px;
}

h2 {
  font-size: 35px;
  color: #432A0B;
  margin: 0;
}
</style>