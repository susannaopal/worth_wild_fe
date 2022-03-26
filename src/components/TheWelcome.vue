<script setup>
  import logo from "../assets/worth_wild.png";
  import { RouterLink } from "vue-router";
</script>

<template>
  <h1>Worth Wild</h1>
  <!-- <img src="logo"/> -->
  <div class="landing-page-btns">
     <RouterLink to="/home">Guest</RouterLink>
     <RouterLink to="/login">Log In</RouterLink>
  </div>
  <article>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in. Pulvinar etiam non quam lacus suspendisse. Mauris vitae ultricies leo integer. Tincidunt arcu non sodales neque sodales ut. Eget est lorem ipsum dolor. Eu consequat ac felis donec et odio pellentesque diam. Enim ut tellus elementum sagittis vitae et leo. Ut pharetra sit amet aliquam id diam. Tortor posuere ac ut consequat semper viverra nam. Semper viverra nam libero justo. Viverra maecenas accumsan lacus vel facilisis. Mauris ultrices eros in cursus turpis massa. Dui accumsan sit amet nulla.</p>
  </article>
</template>

<style>
  button {
    background-color: green;
  }
  p {
    color: #432A0B;
  }
</style>
