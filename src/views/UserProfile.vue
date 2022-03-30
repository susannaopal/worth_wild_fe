<script>
  import { RouterLink } from "vue-router";
  import NavBar from '../components/NavBar.vue';

  export default {
  props: {
    user: ["user"]
   },
  }
</script>

<template>
  <body>
    <NavBar />
    <section class="user-info-section">
      <h3 v-if="user">Welcome, {{ user.attributes.first_name }}</h3>
    </section>
    <h2>Favorites:</h2>
    <section class="user-favorite-animals">
      <div class="animal-card">Animal here</div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
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
  justify-content: center;
  height: 300px;
  width: 375px;
  background-color:#556D1D;
  border-radius: 25px;
  color: #556D1D;
  /* border: 3px solid #3b4b13; */
  border: 3px solid #526625;
  margin: 35px;
}

h2 {
  font-size: 35px;
  color: #432A0B;
}
</style>