<script>
  import { RouterLink } from "vue-router";
  import NavBar from '../components/NavBar.vue';

  export default {
    data() {
      return {
        id : 1,
        type: "animal",
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
            'states/territory': ['Alaska', 'Oregon', 'Washington', 'Manitoba'],
            },
          vulnerability: {
            'gRank': 'g5',
            'gRankReasons': 'Secure'
            },
          habitats: ['Woodland - Conifer', 'Woodland - Hardwood'],
          habitatComments: 'Black bears inhabit forests and nearby openings, including forested wetlands.',
          'threatImpactComments': 'Locally threatened by habitat loss and interference by humans.',
          'shortTermTrend': 'Populations have increased recently in the northeastern U.S.',
          popSize: '10,000 to >1,000,000 individuals',
          imageUrl: 'https://i.natgeofe.com/n/079d885f-8e97-4e79-a6f1-d7578892399b/4403088.jpg'
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
      <div class="animal-picture">
        <h2>{{ this.attributes.common_name.toUpperCase() }}</h2>
        <h3>{{ this.attributes.vulnerability.gRankReasons }}</h3>
        <img require src=this.attributes.imageUrl alt="animal pic" />
      </div>
      <section class="animal-facts">
        <div class="scientific-class-div">
          <p class="scientific-classification">Phylum:</p>
          <p class="scientific-classification">Class:</p>
          <p class="scientific-classification">Order:</p>
          <p class="scientific-classification">Family:</p>
          <p class="scientific-classification">Genus:</p>
          <p class="scientific-classification">Species:</p>
        </div>
        <div class="threats-div">
          <p class="threats-info">There are only 2,700 to 4,000 Bengal tigers left in the world. Over the last 100 years, Bengal tigers have lost 93% of their former habitat. </p>
          <p class="threats-info">Threats to the Bengal Tiger
          The clearance of forests, an increasing human population and a greater demand for tiger products have all contributed to the tiger's decline. Most tigers are now protected and living in reserves, so the destruction of their habitat is not so great a danger, but as tigers become rarer, the value of a dead tiger has increased. </p>
        </div>
      </section>
    </section>
  </body>
</template>

<style>
  .animal-details {
    width: 95vw;
  }
</style>