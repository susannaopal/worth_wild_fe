/* eslint-disable prettier/prettier */
<script setup>
import { RouterLink } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<script>
// export default {
//   props: {
//     ...RouterLink.props,
//    },
//   }

</script>

<template>
  <body>
    <NavBar />
    <section class="feature-info">
      <div class="feature-info-div">
        <h3>Animal of the Day</h3>
        <img src="" alt="animal of the day" />
        <h2>Animal Name</h2>
      </div>
      <div class="feature-info-div">
        <h3>Featured Organization</h3>
        <img src="" alt="organization image" />
      </div>
    </section>
    <section class="search-bar-div">
      <input type="text" placeholder="Search by name" name="animal" class="search-bar" />
    </section>
    <section class="animal-cards-section">
      <RouterLink to="/details" class="animal-card">Animal Here</RouterLink>
      <div class="animal-card">Animal here</div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
      <div class="animal-card"></div>
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
  justify-content: space-between;
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

.animal-cards-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #E9E7DD;
  border: 3px solid #C8C097;
  border-radius: 35px;
  margin-top: 75px;
  width: 95vw;
}

.animal-card {
  display: flex;
  justify-content: center;
  height: 300px;
  width: 400px;
  background-color:#556D1D;
  border-radius: 25px;
  color: #556D1D;
  /* border: 3px solid #3b4b13; */
  border: 3px solid #526625;
  margin: 35px;
}

.animal-card:hover {
  color: #e9e7dd;
}
</style>
