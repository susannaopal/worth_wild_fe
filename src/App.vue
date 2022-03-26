<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
    <div class="wrapper">
      <HelloWorld msg="Welcome to Animal World" />

      <nav>
        <!-- <RouterLink to="/">Welcome</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/dashboard"><button>User Dashboard</button></RouterLink> -->
        <!-- <RouterLink to="/:animal">Animal Page</RouterLink> -->
      </nav>
    </div>

  <RouterView />

</template>

<style>
/* @import "@/assets/base.css"; */


</style>
