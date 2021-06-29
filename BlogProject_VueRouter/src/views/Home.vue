<template>
  <div class="home">
    <div class="container">
      <img alt="Home photo" src="https://images2.alphacoders.com/650/thumb-1920-650266.jpg">
      <div class="intro">
        <div class="type" style="color: gray">FEATURED ARTICLE</div>
        <h2 class="title">World's Most Dangerous Technology Ever Made.</h2>
        <div class="more" style="display: flex; color: gray">
          <em>
            <span class="author">Ralph Hawkins . </span>
            <span class="time"> May 7, 2019 (10 mins read)</span>
          </em>
        </div>
        <p>Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.</p>
      </div>
    </div>
    <h1>Editor’s Picks<span></span></h1>

    <Tags/>

    <div class="container">
      <img src="https://images4.alphacoders.com/310/thumb-1920-31004.jpg" alt="">
      <div class="infor">
        <div class="type" style="color: gray">FEATURED ARTICLE</div>
        <h2 class="title">Mysterious "City of Illusion" appeared off the lake.</h2>
        <div class="more" style="display: flex; color: gray">
          <em>
            <span class="author">Ralph Hawkins . </span>
            <span class="time"> May 7, 2019 (10 mins read)</span>
          </em>
        </div>
        <p>Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import Tags from '../components/uncommon/Tags.vue'
export default {
  name: 'Home',
  components: {
    Tags,
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style scoped>
.home{
  width: 100%;
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