<script>
  import { RouterLink } from "vue-router";
  import NavBar from '../components/NavBar.vue';

  export default {
    data() {
      return {
        id : 1,
        type: 'animal',
        attributes: {
          common_name: 'american black bear',
          scientific_name: 'Ursus americanus',
          kingdom: 'Animalia',
          phylum: 'Craniata',
          taxclass: 'Mammalia',
          taxorder: 'Carnivora',
          family: 'Ursidae',
          genus: 'Ursus',
          biome: 'Terrestrial',
          region: {
            statesTerritories: ['Alaska', 'Oregon', 'Washington', 'Manitoba'],
          },
          vulnerability: {
            gRank: 'g1',
            gRankReasons: 'Critically Imperiled'
          },
          habitats: ['Woodland - Conifer', 'Woodland - Hardwood'],
          habitatComments: 'Black bears inhabit forests and nearby openings, including forested wetlands.',
          threatImpactComments: 'Locally threatened by habitat loss and interference by humans.',
          shortTermTrend: 'Populations have increased recently in the northeastern U.S.',
          popSize: '10,000 to >1,000,000 individuals',
          imageUrl: 'https://i.natgeofe.com/n/079d885f-8e97-4e79-a6f1-d7578892399b/4403088.jpg',
          hostUrl: 'host.example.com'
        }
      }
    },

    methods: {
      
    }
  }
</script>

<template>
  <body>
    <NavBar />
    <section class="animal-details">
      <div :style="{'background-image': `url(${this.attributes.imageUrl})`}" class="animal-picture-div">
        <h2 class="name">{{ this.attributes.common_name.toUpperCase() }}</h2>
        <h3 class="status">{{ this.attributes.vulnerability.gRankReasons }}</h3>
      </div>
      <section class="animal-facts">
        <div class="scientific-class-div">
          <p class="scientific-classification">Phylum: {{ this.attributes.phylum }}</p>
          <p class="scientific-classification">Class: {{ this.attributes.taxclass }}</p>
          <p class="scientific-classification">Order: {{ this.attributes.taxorder }}</p>
          <p class="scientific-classification">Family: {{ this.attributes.family }}</p>
          <p class="scientific-classification">Genus: {{ this.attributes.genus }}</p>
          <p class="scientific-classification">Species: {{ this.attributes.scientific_name }}</p>
        </div>
        <div class="threats-div">
          <p class="threats-info">Currently there are {{ this.attributes.popSize }} in America. {{ this.attributes.shortTermTrend }}</p>
          <h4>Threats to the {{ this.attributes.common_name.toUpperCase() }}:</h4>
          <p class="threats-info">{{ this.attributes.habitatComments }} {{ this.attributes.threatImpactComments }}</p>
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