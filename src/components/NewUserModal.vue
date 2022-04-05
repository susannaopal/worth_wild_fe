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
      <button type="submit">Submit</button>
    </form>
    </transition>
</template>


<style lang="scss" scoped>

</style>