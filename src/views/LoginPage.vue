<script>
 export default {
   data() {
     return {
       username: "",
       password: ""
     }
   }
 }
</script>

<template>
  <form>
    <label>Username:</label>
    <input 
      type="text"
      name="username"
      required
      v-model="username"
    />
    <label>Password:</label>
    <input 
      type="text"
      name="password"
      required
      v-model="password"
    />
  </form>
</template>


<style>

</style>