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
    <div class="input-div">
      <label>Username:</label>
      <input 
        type="text"
        name="username"
        required
        v-model="username"
      />
    </div>
    <div class="input-div">
      <label>Password:</label>
      <input 
        type="text"
        name="password"
        required
        v-model="password"
      />
    </div>
    <button class="login-btn" type="submit">Login</button>
  </form>
</template>

<style>
  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #3B4B13;
    padding: 50px;
    height: 40vh;
    width: 30vw;
    border-radius: 25px;
  }

  label, input {
    color: #E9E7DD;
  }

  input {
    border-radius: 50px;
    height: 25px;
    width: 20em;
    margin-top: 5px;
    border: 3px solid #C8C097;
  }

  .input-div {
    display: flex;
    flex-direction: column;
  }

  .login-btn {
    color: #432A0B;
    background-color: #E9E7DD;
    width: 20%;
    border-radius: 25px;
    height: 35px;
    border: 3px solid #BCB8A1;
    font-size: large;
    cursor: pointer;
  }

  .login-btn:hover {
    transition: .2s;
    transform: scale(1.2);
    background-color: #556D1D;
    color: #E9E7DD;
  }
</style>

