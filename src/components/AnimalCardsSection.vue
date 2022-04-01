<script>
import AnimalCard from './AnimalCard.vue'
  export default {
    props: ['animals'],
    components: { AnimalCard }
  }
</script>

<template>
<div >
  <AnimalCard v-for="(animal) in animals" 
 :commonName="animal.attributes.common_name"
 :scientificName="animal.attributes.scientific_name"
 :gRankReasons="animal.attributes.vulnerability.gRankReasons"
 :id="animal.attributes.element_code"></AnimalCard>
</div>
</template>