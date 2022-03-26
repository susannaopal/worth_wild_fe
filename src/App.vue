<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
    <div class="wrapper">
      <HelloWorld msg="Welcome to Animal World" />

      <nav>
        <RouterLink to="/">Welcome</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/dashboard"><button>User Dashboard</button></RouterLink> -->
      </nav>
    </div>

  <RouterView />
  <!-- <template>
  <div id="app">
    <SideBar /> 
    <router-view v-if="loaded" /> 
  </div>
</template>

<script>
import SideBar from "./pages/SideBar";

export default {
  components: { SideBar },
  computed: {
    loaded() {
      return this.$store.state.loadState == "loaded";
    }
  }
};
</script> -->

</template>

<style>
/* @import "@/assets/base.css"; */
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital@1&display=swap');

html {
  background-color: #93A443;
  font-family: 'Arvo', serif;
}
</style>
