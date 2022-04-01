<script>
export default {
	props: ['commonName', 'scientificName', 'gRankReasons']
}
</script>


<template>
  <p>{{ commonName }}</p>
  <p>{{ scientificName }}</p>
  <p>{{ gRankReasons }}</p>
</template>