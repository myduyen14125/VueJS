<template>
    <div class="nav">
      <div class="left-nav">
        <Logo/>
        <router-link to="/">Home</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/users">Users</router-link> |
      </div>
      <div class="right-nav">
        <div class="search-bar" style="width: 60%">
          <input type="text" placeholder="Find users...">
          <div class="fa fa-search" style="margin: 0 10px"></div>
        </div>
        <button class="login-button" @click="$router.push({
          path: '/login'
        })">Login</button>
      </div>
        <!-- <button @click="$router.go(-1)">Back</button> |
        <button @click="$router.go(1)">Forward</button> -->
    </div>
</template>

<script>
import Logo from '../uncommon/Logo.vue'
export default ({
    components: {
      Logo
    }
})
</script>

<style scoped>
.nav{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 7vh;
  /* box-shadow: 0 4px 6px -2px gray; */
  margin: 0;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
}
.logo{
  font-size: 30px;
  margin: 0 20px;
  cursor: pointer;
  position: relative;
  font-weight: bold;
}
.black{
  background-color: #1e2731;
  position: absolute;
  z-index: -1;
  width: 55px;
  height: 45px;
  top: -10px;
  left: -13px;
}
.left-nav, .right-nav{
  width: 50%;
  display: flex;
  align-items: center;
}
.right-nav{
  justify-content: flex-end;
}
.search-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.login-button{
  padding: 9px 15px;
  font-size: 18px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #1e2731;
  cursor: pointer;
  margin: 0 10px;
  transition: 0.4s;
}
.login-button:hover{
  color: white;
  background-color: #1e2731;
}
a{
  margin: 0 20px;
  color: #2c3e50;
  transition: 0.4s;
  border-bottom: 5px solid white;
}
a:hover{
  border-bottom: 5px solid #2c3e50;
}
.search-bar{
  position: relative;
}
input{
  padding: 10px;
  border-radius: 10px;
  color: #2c3e50;
  width: 85%;
  outline: none;
  box-sizing: border-box;
  transition: 0.4s;
  border: 1px solid gray;
}
input:hover{
  border: 1px solid #2c3e50;
}
.fa-search{
  position: absolute;
  right: 0;
  top: 8px;
}

/* Responsive */
@media screen and (max-width: 992px) {
  .nav{
    font-size: 1.1rem;
  }
  .login-button{
    font-size: 16px;
  }
  .search-bar input{
    display: none;
  }
  .fa-search{
    position: relative;
    top: 0;
  }
}
@media screen and (max-width: 768px){
  .logo{
    display: none;
  }
  .login-button{
    font-size: 14px;
  }
}
@media screen and (max-width: 500px){
  a{
    margin: 0 10px;
  }
}
@media screen and (max-width: 420px){
  .nav{
    font-size: 1rem;
  }
  .login-button{
    font-size: 14px;
    padding: 8px 10px;
  }
  .fa-search{
    display: none;
  }
  a{
    margin: 0 5px;
  }
}
</style>