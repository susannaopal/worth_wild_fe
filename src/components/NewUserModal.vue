<script>
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
            "Content-Type": "applications/json"
          }
        })
        .then(res => res.json())
        .then(res => console.log('POST RES', res))
        .catch(err => store.error = err)
      }
    } 
  }
</script>

<template>
  <transition name="modal">
    <form v-if="show">
      <input type="text" placeholder="First Name" v-model="firstName"/>
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password"/>
      <button @click.prevent="this.postNewUser" type="submit">Submit</button>
    </form>
    </transition>
</template>


<style lang="scss" scoped>

</style>