<template>
  <div class="home">
    
    <h1>Home Page<span></span></h1>
    <div class="content">
      <h3>This is a todo app with these functions:</h3>
      <ul>
        <li>Get users data from backend, created by mockAPI, source: <a href="https://60d94868eec56d001747768f.mockapi.io/v1/users"> Right here</a></li>
        <li>Post data users registering with name and phone number, then Fake data of avatar...</li>
        <li>Edit data -  user's profile (only name and phone number)</li>
        <li>Delete users</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  min-height: 37vh;
}
.container{
  margin: 15px auto;
  padding: 0;
  position: relative;
}
img{
  width: 97.8%;
  height: 70vh;
  object-fit: cover;
}
.intro, .infor{
  position: absolute;
  box-sizing: border-box;
  text-align: left;
  width: 500px;
  padding: 50px;
  background-color: white;
}
.intro{
  top: 0;
  left: 5%;
}
.infor{
  top: 13%;
  right: 8%;
}
.intro h2, .infor h2{
  font-size: 1.6rem;
}
h1{
  width: 250px;
  margin: 30px auto;
  position: relative;
}
h1 span{
  width: 150px;
  height: 5px;
  background-color: #2c3e50;
  position: absolute;
  bottom: -10px;
  left: 22%;
}
.content ul{
  text-align: left;
  width: 50%;
  margin: auto;
}
.content ul li{
  margin: 10px;
}

/* Responsive */
@media screen and (max-width: 1140px) {
  .home{
    font-size: 1rem;
  }
  .intro, .infor{
    width: 450px;
    padding: 40px;
  }
  .intro h2, .infor h2{
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 992px) {
  .home{
    font-size: 0.95rem;
  }
  .intro, .infor{
    width: 400px;
    padding: 35px;
  }
  .intro h2, .infor h2{
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 768px){
  .home{
    font-size: 0.85rem;
  }
  .intro, .infor{
    width: 350px;
    padding: 35px;
  }
  .intro h2, .infor h2{
    font-size: 1.25rem;
  }
  h1{
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 500px){
  .home{
    font-size: 0.75rem;
  }
  .intro, .infor{
    width: 320px;
    padding: 25px;
  }
  .intro h2, .infor h2{
    font-size: 1.1rem;
  }
  .type{
    display: none;
  }
}
@media screen and (max-width: 420px){
  .home{
    font-size: 0.7rem;
  }
  .intro, .infor{
    width: 260px;
    padding: 25px;
  }
  .intro h2, .infor h2{
    font-size: 1.1rem;
  }
  .type{
    display: none;
  }
}
</style>