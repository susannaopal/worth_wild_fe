/* eslint-disable prettier/prettier */
<script setup>
import { RouterLink } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import { store } from "../store.js";
import AnimalCardsSection from '@/components/AnimalCardsSection.vue';
import wwf_logo from "@/assets/wwf-logo.png";
</script>

<script>
export default {
  name: "HomePage",
    data() {
      return {
        store,
        searchPhrase: '',
        searchedAnimals: [],
      }
    },
    created() {
      this.getAnimals()  
    },
    methods: {
      async getAnimals() {
        const res = await fetch('https://secure-island-06435.herokuapp.com/api/v1/animals');
        if (!res.ok) {
          store.error = res.statusText
        } else {
          const data = await res.json();
          store.animals = data.data;
          store.animalLoading = false;
        }
      },
      filterAnimals() {
        const filtered = store.animals.filter(animal => {
          return animal.attributes.common_name.toLowerCase().includes(this.searchPhrase.toLowerCase())
        })
        this.searchedAnimals = filtered
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
          class="animal-of-day-img"
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
      <input 
        v-model="this.searchPhrase"
        @keyup="filterAnimals()"
        type="text" 
        placeholder="Search by name" 
        class="search-bar" 
      />
    </section>
    <div class="labels-container">
      <h3 class="label">Common Name</h3>
      <h3 class="label">Scientific Name</h3>
      <h3 class="label">Conservation Status</h3>
    </div>
    <section class="animal-cards-section">
      <h2 v-if="store.animalLoading && !store.error">Loading...</h2>
      <h2 v-else-if="store.error">{{ store.error }}</h2>
      <AnimalCardsSection v-if="searchPhrase" :animals="this.searchedAnimals" />
      <AnimalCardsSection v-else :animals="store.animals" />
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

.labels-container {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  margin: 70px 0px 10px;
}

.label {
  font-size: x-large;
}

.animal-cards-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #E9E7DD;
  border: 3px solid #C8C097;
  border-radius: 35px;
  width: 95vw;
}

.wwf-logo, a {
  display: flex;
  justify-content: center;
  height: 85%;
}

.animal-of-day-img {
  height: 150px;
  width: 225px;
  margin-bottom: 15px;
}
</style>
