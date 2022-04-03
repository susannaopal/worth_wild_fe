<script>
  import { RouterLink } from "vue-router"
  export default {
    props: ['commonName', 'scientificName', 'gRankReasons']
  }
</script>


<template>
  <div class="card-div">
    <RouterLink to="/details" class="animal-card-link">
      <p>{{ commonName }}</p>
      <p>{{ scientificName }}</p>
      <p>{{ gRankReasons }}</p>
    </RouterLink>
  </div>
  <div class="line"></div>
</template>

<style>
  .card-div {
    width: 95%;
    margin-left: 70px;
  }

  .card-div:hover {
    background-color: #bccf8f;
    transform: scale(1.1);
    cursor: pointer;
  }

  .animal-card-link {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-gap: 22%;
    height: 10%;
    width: 95%;
    /* border-bottom: 2px solid #C8C097; */
    color: #432A0B;
  }

  .line {
    border: 1px solid #c8c097;
    width: 90%;
  }
</style>