<script>
import AnimalCard from './AnimalCard.vue'
  export default {
    props: ['animals'],
    components: { AnimalCard }
  }
</script>

<template>
<div class="card-section">
    <AnimalCard
      v-for="(animal) in animals" 
      :commonName="animal.attributes.common_name"
      :scientificName="animal.attributes.scientific_name"
      :gRankReasons="animal.attributes.vulnerability.gRankReasons"
      :id="animal.attributes.element_code"
      :key="animal.attributes.element_code" />
  </div>
</template>

<style>
  .card-section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
  }
</style>