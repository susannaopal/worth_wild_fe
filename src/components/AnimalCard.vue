<script>
export default {
	props: ['commonName', 'scientificName', 'gRankReasons']
}
</script>


<template>
  <div class="card-div">
    <p>{{ commonName }}</p>
    <p>{{ scientificName }}</p>
    <p>{{ gRankReasons }}</p>
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
  }
</style>