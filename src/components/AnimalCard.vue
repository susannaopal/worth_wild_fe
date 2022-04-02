<script>
import { RouterLink } from "vue-router"
export default {
	props: ['commonName', 'scientificName', 'gRankReasons']
}
</script>


<template>
  <div class="card-div">
    <RouterLink to="/details" class="link">
      <p>{{ commonName }}</p>
      <p>{{ scientificName }}</p>
      <p>{{ gRankReasons }}</p>
    </RouterLink>
  </div>
</template>

<style>
  .card-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10%;
    width: 95%;
    border-bottom: 2px solid #C8C097;
    color: #432A0B;
  }

  .card-div:hover {
  background-color: #D4CA98;
  cursor: pointer;
}

</style>