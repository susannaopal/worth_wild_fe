<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <body>
    <img required src="../assets/worth_wild.png" class="logo" />
    <div class="landing-page-links">
      <RouterLink to="/home" class="landing-btns">Guest</RouterLink>
      <RouterLink to="/login" class="landing-btns">Log In</RouterLink>
    </div>
    <p class="mission-statement">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat
      in. Pulvinar etiam non quam lacus suspendisse. Mauris vitae ultricies leo
      integer. Tincidunt arcu non sodales neque sodales ut. Eget est lorem ipsum
      dolor. Eu consequat ac felis donec et odio pellentesque diam. Enim ut
      tellus elementum sagittis vitae et leo. Ut pharetra sit amet aliquam id
      diam. Tortor posuere ac ut consequat semper viverra nam. Semper viverra
      nam libero justo. Viverra maecenas accumsan lacus vel facilisis. Mauris
      ultrices eros in cursus turpis massa. Dui accumsan sit amet nulla.
    </p>
  </body>
</template>

<style>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  border: 3px solid red;
  height: 200px;
  padding: -100px;
}

.mission-statement {
  color: #432a0b;
  background-color: #e9e7dd;
  width: 50%;
  padding: 35px 25px;
  border-radius: 20px;
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
