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
  <form>
    <input type="text" placeholder="First Name" v-model="firstName"/>
    <input type="text" placeholder="Last Name" v-model="lastName" />
    <input type="text" placeholder="Email" v-model="email" />
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password"/>
    <button type="submit">Submit</button>
  </form>
</template>


<style lang="scss" scoped>

</style>