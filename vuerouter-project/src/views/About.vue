<template>
  <div class="about">
    <div class="intro">
      <Logo/>
      <p>A publishing company that focuses on the essentials.</p>
    </div>
    <div class="about-container">
      <div class="box1">
        <div class="content">
          <h1><b>{{ stories[0].title }}</b></h1>
          <p>{{ stories[0].content }}</p>
        </div>
        <img class="photo" :src="stories[0].thumbnail" alt="">
      </div>

      <div class="box2">
        <img class="photo" :src="stories[1].thumbnail" alt="">
        <div class="content">
          <h1><b>{{ stories[1].title }}</b></h1>
          <p>{{ stories[1].content }}</p>
        </div>
      </div>

      <div class="box3">
        <div class="content" style="width: 50%">
          <h1><b>{{ stories[2].title }}</b></h1>
          <p>{{ stories[2].content }}</p>
        </div>
        <div class="photo-box">
          <img style="width: 540px" class="photo" :src="stories[2].thumbnail" alt="">
          <img style="width: 540px" class="photo" :src="stories[3].thumbnail" alt="">
        </div>
      </div>

    </div>

    <div class="slogan">
      <h1>Because we are you.<br>Humans</h1>
      <p>Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad.</p>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Logo from '../components/uncommon/Logo.vue'
import Footer from '../components/common/Footer.vue'
export default ({
  name: 'About',
  components: {
    Logo, 
    Footer
  },
  created() {
    console.log(this.$route)
  }
  ,
  data() {
    return {
      stories: [
        {
          id: 0,
          title: 'We tell stories that drives the heart.',
          content: 'Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.',
          thumbnail: 'https://images6.alphacoders.com/106/thumb-1920-1067506.png'
        },
        {
          id: 1,
          title: 'We tell the news that makes the most impact.',
          content: 'Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.',
          thumbnail: 'https://images3.alphacoders.com/680/thumb-1920-680776.png'
        },
        {
          id: 2,
          title: 'We share the little moments that shows we’re alive.',
          content: 'Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.',
          thumbnail: 'https://images3.alphacoders.com/750/thumb-1920-750629.png'
        },
        {
          id: 3,
          title: 'We share the little moments that shows we’re alive.',
          content: 'Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam dolore excepteur tempor dolor consectetur ut id.',
          thumbnail: 'https://cutewallpaper.org/21/snow-background-anime/Anime-Winter-Scenery-Wallpaper-Find-best-latest-Anime-Winter-.jpg'
        },
      ]
    }
  }
})
</script>

<style scoped>
.about{
  width: 97.8%;
  margin: auto;
  overflow-x:hidden;
}
.intro{
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
}
.intro p{
  width: 30%;
}
.about-container{
  width: 90%;
  background-color: #181f27;
  margin: auto;
  padding: 30px;
  color: white;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.4;
  position: relative;
  z-index: -10;
}
.about-container::before{
  content: '';
  position: absolute;
  background-color: white;
  bottom: 0;
  left: 10%;
  width: 6px;
  height: 60%;
  z-index: -1;
}
.about-container::after{
  content: '';
  position: absolute;
  background-color: white;
  top: 0;
  right: 10%;
  width: 6px;
  height: 40%;
  z-index: -1;
}
.box1{
  width: 88%;
  margin:80px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.box2 {
  position: relative;
  left: 25%;
  top: -60px;
}
.box3{
  margin: 90px auto 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content{
  margin: 50px;
  width: 35%;
  text-align: left;
}
.photo{
  width: 600px;
  height: 450px;
  object-fit: cover;
  margin: 0 20px;
}
.slogan{
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.slogan p{
  width: 430px;
}
</style>