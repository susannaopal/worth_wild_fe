<script>
import { RouterLink } from "vue-router";
import { store } from "../store.js"
export default {
  data() {
    return {
      store
    }
  },
  methods: {
    logoutUser() {
      store.isLoggedIn = false 
      store.user = {}
    }
  }
}
</script>

<template>
  <header>
    <div class="logo-tagline-div">
      <div class="logo-div">
        <img require src="../assets/worth_wild_logo.png" class="nav-logo" alt="worth wild logo" />
      </div>
      <h1 class="tagline">Are they worth it to you?</h1>
    </div>
    <div class="nav-buttons-div">
      <RouterLink v-if="store.user.attributes && this.$route.path !== '/user-profile'" to="/user-profile" class="nav-btn">User Profile</RouterLink>
      <RouterLink v-if="store.isLoggedIn && this.$route.path !== '/main'" to="/main" class="nav-btn" >Home</RouterLink>
      <RouterLink v-if="store.user.attributes" to="/" @click="logoutUser" class="nav-btn">Logout</RouterLink>
      <RouterLink to="/login" v-if="!store.user.attributes" class="nav-btn">Login</RouterLink>
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3b4b13;
  width: 100vw;
  height: 12vh;
  padding: 35px;
}

.logo-tagline-div {
  display: flex;
  align-items: center;
}

.logo-div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6vw;
  height: 12vh;
  background-color: #bccf8f;
  border-radius: 50%;
  padding: 25px;
  margin: 10px 35px 10px 15px;
}

.nav-logo {
  transform: scale(.25);
}

.tagline {
  color: #e9e7dd;
  font-size: 45px;
}

.nav-buttons-div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  margin-right: 45px;
  height: 100%;
  width: 10%;
}

.nav-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #432a0b;
  background-color: #e9e7dd;
  width: 80%;
  height: 33%;
  border-radius: 25px;
  border: 3px solid #bcb8a1;
  font-size: large;
  cursor: pointer;
  margin: 5px 0px;
}

.nav-btn:hover {
  transition: 0.2s;
  transform: scale(1.2);
  background-color: #556d1d;
  color: #e9e7dd;
}
</style>
