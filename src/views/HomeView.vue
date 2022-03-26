<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
 <nav>
        <RouterLink to="/">Welcome</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <!-- <RouterLink to="/dashboard"><button>User Dashboard</button></RouterLink> -->
        <!-- <RouterLink to="/:animal">Animal Page</RouterLink> -->
      </nav>
  <main>
    <TheWelcome />
  </main>
</template>


