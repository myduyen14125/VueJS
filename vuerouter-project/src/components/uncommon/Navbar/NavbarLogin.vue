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
        <div class="fa fa-bell-o" style="margin: 0 10px"></div>
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
  font-size: 20px;
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
.left-nav{
  width: 50%;
  display: flex;
  align-items: center;
}
.login-button{
  padding: 10px 15px;
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
</style>