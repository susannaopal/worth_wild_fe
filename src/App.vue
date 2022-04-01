<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <!-- <nav>
      <RouterLink to="/">Welcome</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/dashboard"><button>User Dashboard</button></RouterLink>
    </nav> -->
  </div>

  <RouterView />
</template>

<style>
/* @import "@/assets/base.css"; */
@import url("https://fonts.googleapis.com/css2?family=Arvo:ital@1&display=swap");

html {
  background-color: #93a443;
  font-family: "Arvo", serif;
}
</style>
