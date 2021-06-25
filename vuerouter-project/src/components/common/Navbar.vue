<template>
    <div class="nav">
      <div class="left-nav">
        <div class="logo" @click="$router.push({
          path: '/'
        })">
          <div class="black"></div>
          <span style="color: white">nu</span>ntimum.
        </div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/blogs">Blogs</router-link> |
      </div>
      <div class="right-nav">
        <div class="fa fa-search" style="margin: 0 10px"></div>
        <button class="login-button" @click="$router.push({
          path: '/login'
        })">Login</button>
      </div>
        <!-- <button @click="$router.go(-1)">Back</button> |
        <button @click="$router.go(1)">Forward</button> -->
    </div>
</template>

<script>

export default ({
    
})
</script>

<style scoped>
.nav{
  height: 7vh;
  /* box-shadow: 0 4px 6px -2px gray; */
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  position: relative;
}
.logo{
  font-size: 30px;
  margin: 0 20px;
  cursor: pointer;
  font-weight: bold;
}
.black{
  background-color: #1e2731;
  position: absolute;
  z-index: -1;
  width: 55px;
  height: 45px;
  top: 6px;
  left: 16px;
}
.left-nav{
  width: 50%;
  display: flex;
  align-items: center;
}
.login-button{
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 8px;
}
a{
  margin: 0 20px;
  color: #2c3e50;
}
</style>