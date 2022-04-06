<script>
import { store } from "../store.js"
  export default {
    props: {
      show: Boolean
    },
    data() {
      return {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        successMessage: "",
        store
      }
    },
    methods: {
      postNewUser() {
        const newUser = {
          username: this.username,
          email: this.email,
          first_name: this.firstName,
          last_name: this.lastName
        }
        console.log('newUser--', newUser)
        fetch('https://secure-island-06435.herokuapp.com/api/v1/users', {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => res.json())
        .then(data => this.successMessage = data.attributes.first_name)
        .catch(err => store.error = err)
      }
    } 
  }
</script>

<template>
  <transition name="modal" class="modal">
      <form v-if="show" class="modal-mask">
        <div class="modal-container">
          <h2 v-if="this.successMessage">Thank you {{this.successMessage}}. Please sign in.</h2>
          <div v-else class="modal-body">
            <input type="text" placeholder="First Name" v-model="firstName"/>
            <input type="text" placeholder="Last Name" v-model="lastName" />
            <input type="text" placeholder="Email" v-model="email" />
            <input type="text" placeholder="Username" v-model="username" />
            <input type="password" placeholder="Password"/>
            <div class="modal-btn">
              <button class="login-btn" @click.prevent="this.postNewUser"   type="submit">Submit</button>
              <button class="login-btn" @click="$emit('close')">Close</button>
            </div>
          </div>
        </div>
      </form>
  </transition>
</template>


<style scoped>
.modal-container {
  width: 30%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 30px;
  display: flex;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-btn {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
}
</style>