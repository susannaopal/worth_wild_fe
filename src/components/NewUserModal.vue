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
        isActive: false,
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
            <input 
              type="text" 
              placeholder="First Name" 
              :value="firstName"
              required
              @input="e => firstName = e.target.value"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              :value="lastName"
              required
              @input="e => lastName = e.target.value"
            />
            <input 
              type="text"
              required 
              placeholder="Email" 
              :value="email"
              @input="e => email = e.target.value"
            />
            <input 
              type="text" 
              placeholder="Username" 
              required
              :value="username"
              @input="e => username = e.target.value" 
            />
            <input 
              required
              type="password" 
              placeholder="Password"
            />
            <div class="modal-btn">
              <button 
                :disabled="!firstName && !lastName && !username && !email" 
                class="login-btn" 
                @click.prevent="this.postNewUser" 
                @click="$emit('close')" 
                type="submit">Submit</button>
              <button class="login-btn" @click="$emit('close')">Close</button>
            </div>
          </div>
        </div>
      </form>
  </transition>
</template>


<style scoped>
.login-btn:disabled {
  background-color: #bebfc2;
  color: #828385;
}
.modal-container {
  width: 30%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #3b4b13;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 30px;
  display: flex;
}
.modal-body {
  display: flex;
  align-items: center;  
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
  width: 100%;
  margin-top: 15px;
}
</style>