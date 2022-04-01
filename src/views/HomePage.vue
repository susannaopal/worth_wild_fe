/* eslint-disable prettier/prettier */
<script setup>
import { RouterLink } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import { store } from "../store.js"
import AnimalCardsSection from '@/components/AnimalCardsSection.vue'
import wwf_logo from "@/assets/wwf-logo.png"
</script>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      store
    }
  },
  created() {
    this.getAnimals()    
        console.log("Store", store)
    },
    methods: {
      async getAnimals() {
        const res = await fetch('https://secure-island-06435.herokuapp.com/api/v1/animals');
        const data = await res.json();
        store.animals = data.data;
        store.animalLoading = false;
      } 
    }

  }
</script>

<template>
  <body>
    <NavBar />
    <section class="feature-info">
      <div class="feature-info-div">
        <h3>Animal of the Day</h3>
        <img 
          src="../assets/The-Red-Wolf.png" alt="animal of the day" 
          class="animal-of-day"
        />
        <h2>Red Wolf</h2>
      </div>
      <div class="feature-info-div">
        <h3>Featured Organization</h3>
        <a href="https://www.worldwildlife.org/">
          <img  
            src="../assets/wwf-logo.png"   alt="organization image" class="wwf-logo"
          />
        </a>
      </div>
    </section>
    <section class="search-bar-div">
      <input @keydown='this.checkUser()' type="text" placeholder="Search by name" name="animal" class="search-bar" />
    </section>
    <section class="animal-cards-section">
      <h2 v-if="store.animalLoading">Loading...</h2>
      <AnimalCardsSection :animals="store.animals" />
      <!-- <RouterLink to="/details" class="animal-card">{{ store.user.attributes.first_name }}</RouterLink> -->
      <!-- <div class="animal-card">Animal here</div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div> -->
    </section>
  </body>
</template>

<style>
.feature-info {
  display: flex;
  justify-content: space-around;
  width: 98vw;
  height: 40vh;
}

.feature-info-div {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 35vh;
  width: 48%;
  background-color: #e9e7dd;
  border: 3px solid #C8C097;
  border-radius: 50px;
  margin: 15px 30px;
}

.search-bar-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  width: 100vw;
  background-color: #3b4b13;
}

.search-bar {
  height: 55%;
  background-color: #e9e7dd;
  margin: 0;
  font-size: larger;
  padding-left: 30px;
}

.animal-cards-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #E9E7DD;
  border: 3px solid #C8C097;
  border-radius: 35px;
  margin-top: 75px;
  width: 95vw;
  overflow-y: auto;
}

.animal-card {
  display: flex;
  justify-content: center;
  height: 300px;
  width: 400px;
  background-color:#556D1D;
  border-radius: 25px;
  /* color: #556D1D; */
  /* border: 3px solid #3b4b13; */
  border: 3px solid #526625;
  margin: 35px;
}

.animal-card:hover {
  color: #e9e7dd;
}

.wwf-logo, a {
  display: flex;
  justify-content: center;
  width: 70%;
}

.animal-of-day {
  width: 70%;
}
</style>
