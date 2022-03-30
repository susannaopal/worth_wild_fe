<script setup> 
import { RouterLink, RouterView } from "vue-router";
import router from "../router";
import HomePage from "./HomePage.vue"
import UserProfile from "./UserProfile.vue"
</script>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      loginError: false,
      user: {},
    };
  },
  components: {
    HomePage,
    UserProfile,
    },
  name: "LoginPage",
  methods: {
    async getUser() {
      const res = await fetch(
        `https://secure-island-06435.herokuapp.com/api/v1/dashboard?username=${this.username.toLowerCase()}`);
      const data = await res.json();
      this.user = data.data;
      router.push({ name: 'HomePage', params: { user: this.user }})
      // console.log(this.user, 'user')
    },
    checkForm() {
      if (!this.username || !this.password) {
        this.loginError = true;
      } else {
        this.loginError = false;
        this.getUser();
      }
    },
  },
};
</script>

<template>
  <form>
    <div class="input-div">
      <label>Username:</label>
      <input type="text" name="username" required v-model="username" />
    </div>
    <div class="input-div">
      <label>Password:</label>
      <input type="password" name="password" required v-model="password" />
    </div>
    <p v-if="loginError" class="login-error-msg">Please fill out both fields in order to login!</p>
    <!-- <RouterLink @click="this.checkForm" :to="{ name: 'HomePage', props: { user: user } }" class="login-btn">Submit -->
      <button @click.prevent="this.checkForm" class="login-btn" type="submit">Login</button>
    <!-- </RouterLink> -->
  </form>
  <RouterView />
</template>

<style>
form {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #3b4b13;
  padding: 50px;
  height: 40vh;
  width: 30vw;
  border-radius: 25px;
}

label,
input {
  color: #e9e7dd;
}

input {
  border-radius: 50px;
  height: 25px;
  width: 20em;
  margin-top: 5px;
  border: 3px solid #c8c097;
  color: #432a0b;
  font-weight: bold;
  font-size: 15px;
  padding-left: 15px;
}

.input-div {
  display: flex;
  flex-direction: column;
}

.login-btn {
  color: #432a0b;
  background-color: #e9e7dd;
  width: 20%;
  border-radius: 25px;
  height: 35px;
  border: 3px solid #bcb8a1;
  font-size: large;
  cursor: pointer;
}

.login-btn:hover {
  transition: 0.2s;
  transform: scale(1.2);
  background-color: #556d1d;
  color: #e9e7dd;
}

.login-error-msg {
  color: #e9e7dd;
}
</style>
