<script setup>
import { RouterLink } from "vue-router";
import { store } from "../store.js";
</script>
<script>
  export default {
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <body>
    <img required src="../assets/worth_wild_logo.png" class="logo" />
    <div class="landing-page-links">
      <RouterLink to="/main" class="landing-btns">Guest</RouterLink>
      <RouterLink to="/login" class="landing-btns">Log In</RouterLink>
    </div>
    <p class="mission-statement">
      Worth Wild's mission is to bring awareness to North American wild life species that are critically endangered and underrepresented. They need our help before it is too late and they are lost to us forever. To work towards this mission, we created an application that allows users to view local animals and learn more about them; including their endangered status.
    </p>
  </body>
</template>

<style>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
}

.logo {
  height: 400px;
  background-color: #bccf8f;
  border-radius: 50%;
  padding: 20px 20px 35px 25px;
  margin: 15px 0px;
}

.mission-statement {
  color: #432a0b;
  background-color: #e9e7dd;
  width: 50%;
  padding: 35px 25px;
  border-radius: 20px;
  font-size: 18px;
  line-height: 1.5;
}

a {
  text-decoration: none;
}

.landing-page-links {
  display: flex;
  justify-content: space-around;
  width: 20vw;
}

.landing-btns {
  background-color: #556d1d;
  color: #e9e7dd;
  box-shadow: 0px 5px #334111;
  border-radius: 50px;
  height: 5vh;
  width: 10vw;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.landing-btns:hover {
  transition: 0.2s;
  transform: scale(1.1);
  background-color: #e9e7dd;
  color: #556d1d;
}
</style>
