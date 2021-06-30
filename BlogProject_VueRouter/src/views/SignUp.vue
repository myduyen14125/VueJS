<template>
  <div class="signup-container">
    <h1>Sign Up</h1>
    <p>Sign up to get the most out of nuntimum.</p>
    <form action=""  v-on:submit.prevent="$router.push({
      path: '/dashboard'
    })">
      <input type="text" placeholder="Username" required>
      <input type="password" placeholder="Password" required>
      <div class="more">
        <div class="remember-me">
          <input type="checkbox">
          <span>Remember me</span>
        </div>
        <a href="#">Need help?</a>
      </div>
    <button>Sign Up</button>
    </form>
    <div class="need-account">
      <p>Have an account? </p>
      <router-link to="/login">Login here</router-link>
    </div>
    
  </div>

</template>

<style scoped>
a{
  color: #2c3e50;
  border-bottom: 1px solid white;
  transition: 0.2s;
}
a:active{
  color: #1e2731;
}
a:hover{
    border-bottom: 1px solid #2c3e50;
}

.signup-container{
  width: 450px;
  padding: 1rem;
  text-align: center;
  box-shadow: 5px 5px 13px -4px rgba(0,0,0,0.71);

}
input{
  display: block;
  padding: 20px;
  border-radius: 10px;
  background-color: #f3f3f3;
  color: #2c3e50;
  width: 100%;
  outline: none;
  margin: 20px auto;
  border: none;
  box-sizing: border-box;
  transition: 0.4s;
  border: 1px solid white;
}
input:hover{
  border: 1px solid gray;
}
button{
  width: 100%;
  padding: 15px;
  font-size: 1.15rem;
  border-radius: 10px;
  border: 1px solid #1e2731;
  color: #2c3e50;
  margin: 20px auto;
  transition: 0.4s;
  cursor: pointer;
}
button:hover{
  background-color: #1e2731;
  color: white;
}
.more{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}
.more .remember-me{
  display: flex;
  width: 50%;
  align-items: center;
}
input[type="checkbox"]{
  width: fit-content;
  margin: 10px;
}

.need-account{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>