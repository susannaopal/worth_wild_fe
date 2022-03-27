/* eslint-disable prettier/prettier */
<script setup>
import { RouterLink } from "vue-router";
import NavBar from "@/components/NavBar.vue";
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
  </body>
</template>

<style>
.feature-info {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 40vh;
  border: 2px solid blue;
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
  margin-top: 15px;
  border-radius: 50px;
}
</style>
