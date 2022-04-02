<script>
import { RouterLink } from "vue-router";
import { store } from "../store.js"
export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <header>
    <div class="logo-tagline-div">
      <div class="logo-div">
        <img require src="../assets/worth_wild.png" class="nav-logo" alt="worth wild logo" />
      </div>
      <h1 class="tagline">Are they worth it to you?</h1>
    </div>
    <div class="nav-buttons-div">
      <RouterLink v-if="store.user.attributes" to="/user-profile" class="nav-btn">User Profile</RouterLink>
      <RouterLink v-if="store.user.isLoggedIn" to="/main" class="nav-btn" >Main</RouterLink>
      <button v-if="store.user.attributes" class="nav-btn">Logout</button>
      <RouterLink to="/" v-if="!store.user.attributes" class="nav-btn">Login</RouterLink>
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
  width: 18%;
  background-color: #e9e7dd;
  border-radius: 70px;
  padding: 15px;
  margin: 10px 35px 10px 15px;
}

.nav-logo {
  width: 95%;
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
  margin-right: 15px;
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
}

.nav-btn:hover {
  transition: 0.2s;
  transform: scale(1.2);
  background-color: #556d1d;
  color: #e9e7dd;
}
</style>
