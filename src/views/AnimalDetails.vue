<script>
  import { RouterLink } from "vue-router";
  import NavBar from '../components/NavBar.vue';
  import { store } from "../store.js";
  export default {
    data() {
      return {
        animal: {},
        store
      }
    },
    created() {
      console.log('WHAT IS THIS!?!?!?!??!!!?!?!', store.animalDetails)
    },

    methods: {
      // async fetchAnimalDetails() {
      //   const res = await fetch('https://secure-island-06435.herokuapp.com/api/v1/animal?common_name=Southern Kidneyshell&element_code')
      //   if (!res.ok){
      //     store.error = res.statusText
      //   } else {
      //     const data = await res.json();
      //     this.animal = data.data;
      //     store.error = '';
      //   }
      //  }
    }
  }
</script>

<template>
  <body>
    <NavBar />
    <section class="animal-details">
      <!-- <div :style="{'background-image': `url(${store.animalDetails.attributes.imageUrl})`}" class="animal-picture-div"> -->
        <h2 class="name">{{ store.animalDetails.common_name.toUpperCase() }}</h2>
        <h3 class="status">{{ store.animalDetails.vulnerability.gRankReasons }}</h3>
      <!-- </div> -->
      <section class="animal-facts">
        <div class="scientific-class-div">
          <p class="scientific-classification">Phylum: {{ store.animalDetails.phylum }}</p>
          <p class="scientific-classification">Class: {{ store.animalDetails.taxclass }}</p>
          <p class="scientific-classification">Order: {{ store.animalDetails.taxorder }}</p>
          <p class="scientific-classification">Family: {{ store.animalDetails.family }}</p>
          <p class="scientific-classification">Genus: {{ store.animalDetails.genus }}</p>
          <p class="scientific-classification">Species: {{ store.animalDetails.scientific_name }}</p>
        </div>
        <div class="threats-div">
          <p class="threats-info">Currently there are {{ store.animalDetails.popSize }} in America. {{ store.animalDetails.shortTermTrend }}</p>
          <h4>Threats to the {{ store.animalDetails.common_name.toUpperCase() }}:</h4>
          <p class="threats-info">{{ store.animalDetails.habitatComments }} {{ store.animalDetails.threatImpactComments }}</p>
        </div>
      </section>
    </section>
    <div class="bottom-btns">
      <button class="landing-btns">Favorite</button>
      <RouterLink to="/main" class="landing-btns">Back</RouterLink>
    </div>
  </body>
</template>

<style>
  .animal-details {
    background-color: #e9e7dd;
    border-radius: 50px;
    padding: 10px;
    width: 60vw;
    margin-top: 20px;
    z-index: -5;
  }

  .animal-picture-div {
    height: 300px;
    width: fit-content;
  }
  
  .name {
    z-index: 1;
  }

  .bottom-btns {
    display: flex;
  }
</style>