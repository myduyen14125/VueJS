<template>
  <div class="dashboard">
    <div class="title">
      <h1>Dashboard</h1>
      <button class="customize-button">Customize</button>
    </div>
    <div class="discription-container">
      <div class="box sumup">
        <span style="display: block;text-align: left;">Total Posts</span>
        <div class="info">
          <div style="margin: 0 10px" class="fa fa-pencil"></div>
          <span class="number">214</span>
        </div>
        <span style="color: gray; display: block;text-align: right;" class="time">This month</span>
      </div>
      <div class="box sumup">
        <span style="display: block;text-align: left;">Total Views</span>
        <div class="info">
          <div style="margin: 0 10px" class="fa fa-eye"></div>
          <span class="number">130K</span>
        </div>
        <span style="color: gray; display: block;text-align: right;" class="time">This month</span>
      </div>
      <div class="box article">
        <span>Most Viewed Article</span>
        <div class="info">
          The Most Awesome Article Man Has Ever Written
        </div>
      </div>
    </div>

    <div class="total-view">
      <h1 style="text-align: left">Total Views</h1>
      <img src="../assets/totalviews.png" alt="" style="width: 100%">
    </div>
  </div>
</template>

<script>
export default ({
  name: 'About',
  created() {
    console.log(this.$route)
  }
})
</script>

<style scoped>
.dashboard{
  padding: 50px;
}
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.customize-button{
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 8px;
  background-color: white;
  color: #2c3e50;
  border: 1px solid #1e2731;
  cursor: pointer;
  margin: 0 10px;
  transition: 0.4s;
}
.customize-button:hover{
  color: white;
  background-color: #1e2731;
}

.discription-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  box-sizing: border-box;
}
.discription-container .box{
  border: 1px solid #2c3e50;
  border-radius: 10px;
  padding: 15px;
  height: 80%;
}
.sumup{
  width: 124px;
}
.box .info{
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  margin: 10px auto;
}
.total-view{
  margin-top: 50px;
}
/* Responsive */
@media screen and (max-width: 1320px) {
    h1{
        font-size: 1.6rem;
    }
    .box .info{
      font-size: 1.2rem;
    }
}
@media screen and (max-width: 1140px){
    .article{
      display: none;
    }
}
</style>