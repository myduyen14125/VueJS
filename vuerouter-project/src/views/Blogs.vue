<template>
  <div class="blogs">
    <h1>This is blogs page</h1>

    <div class="cover">
      <img :src="blogs[0].thumbnail" alt="" style="width: 97.8%; height: 60vh; object-fit: cover">
      <div class="content">
        <span class="description" style="display: block; color: gray; text-transform: uppercase">{{ blogs[0].description }}</span>
          <h3 class="title">{{ blogs[0].title }}</h3>
          <em class="time" style="color: gray">{{ blogs[0].createdAt }}</em>
          <p>{{ blogs[0].content }}</p>
      </div>
    </div>

    <template v-for="blog in blogs">
      <div class="blog-container" :key="'blog-'+blog.id" @click="$router.push(/blog/+blog.id)" v-if="(blog.id <= 3) && (blog.id > 0)" >
        <img class="photo" :src="blog.thumbnail" alt="#">
        <div class="content">
          <span class="description" style="display: block; color: gray; text-transform: uppercase">{{ blog.description }}</span>
          <h3 class="title">{{ blog.title }}</h3>
          <em class="time" style="color: gray">{{ blog.createdAt }}</em>
          <p>{{ blog.content }}</p>
        </div>
      </div>
    </template>

    <div class="cover">
      <img :src="blogs[4].thumbnail" alt="" style="width: 97.8%; height: 60vh; object-fit: cover">
      <div class="content">
        <span class="description" style="display: block; color: gray; text-transform: uppercase">{{ blogs[4].description }}</span>
          <h3 class="title">{{ blogs[4].title }}</h3>
          <em class="time" style="color: gray">{{ blogs[4].createdAt }}</em>
          <p>{{ blogs[4].content }}</p>
      </div>
    </div>

    <template v-for="blog in blogs">
      <div class="blog-container" :key="'blog-'+blog.id" @click="$router.push(/blog/+blog.id)" v-if="(blog.id > 4)">
        <img class="photo" :src="blog.thumbnail" alt="#">
        <div class="content">
          <span class="description" style="display: block; color: gray; text-transform: uppercase">{{ blog.description }}</span>
          <h3 class="title">{{ blog.title }}</h3>
          <em class="time" style="color: gray">{{ blog.createdAt }}</em>
          <p>{{ blog.content }}</p>
        </div>
      </div>
    </template>

    <Footer/>
  </div>
</template>

<script>
import {bus} from '../main'
import Footer from '../components/common/Footer.vue'
export default ({
  name: 'Blogs',
  components: {
    Footer
  },
  created() {
    console.log(this.$route)
  },
  data() {
    return {
      blogs: [
        {
          "id": "0",
          "categoryId": "2",
          "createdAt": "2021-04-23T09:07:41.855Z",
          "title": "Cross-platform",
          "thumbnail": "https://images.alphacoders.com/109/thumb-1920-1091207.jpg",
          "description": "Legacy",
          "content": "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit."
        },
        {
          "id": "1",
          "categoryId": "3",
          "createdAt": "2021-04-23T14:57:39.459Z",
          "title": "Bedfordshire",
          "thumbnail": "https://images.alphacoders.com/736/thumb-1920-736461.png",
          "description": "Investor",
          "content": "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit."
        },
        {
          "id": "2",
          "categoryId": "4",
          "createdAt": "2021-04-23T13:31:36.828Z",
          "title": "Programming application quantify",
          "thumbnail": "https://images3.alphacoders.com/727/thumbbig-72705.webp",
          "description": "Dynamic",
          "content": "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit."
        },
        {
          "id": "3",
          "categoryId": "4",
          "createdAt": "2021-04-23T13:31:36.828Z",
          "title": "Programming application quantify",
          "thumbnail": "https://images6.alphacoders.com/718/thumb-1920-718319.png",
          "description": "Dynamic",
          "content": "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit."
        },
        {
          "id": "4",
          "categoryId": "4",
          "createdAt": "2021-04-23T13:31:36.828Z",
          "title": "Programming application quantify",
          "thumbnail": "https://images7.alphacoders.com/670/thumb-1920-670930.jpg",
          "description": "Dynamic",
          "content": "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit."
        },
        {
          "id": "5",
          "categoryId": "4",
          "createdAt": "2021-04-23T13:31:36.828Z",
          "title": "Programming application quantify",
          "thumbnail": "https://images3.alphacoders.com/555/thumb-1920-555568.jpg",
          "description": "Dynamic",
          "content": "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit."
        },
        {
          "id": "6",
          "categoryId": "2",
          "createdAt": "2021-04-23T09:07:41.855Z",
          "title": "Cross-platform",
          "thumbnail": "https://images8.alphacoders.com/519/thumb-1920-519517.jpg",
          "description": "Legacy",
          "content": "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit."
        },
      ]
    }
  },
  methods: {
    transmitData: function(){
      bus.$emit('transmitData', '')
    }
  }
})
</script>

<style scoped>
.blog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.blog-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 3px 5px 4px -5px rgba(0,0,0,0.71);
  width: 60%;
  margin: 1.6rem auto;
  text-align: left;
  font-size: 1rem;
}
.cover{
  position: relative;
  margin: 30px auto;
}
.cover .content{
  position: absolute;
  z-index: 3;
  padding: 35px;
  top: 10%;
  left: 8%;
  width: 30%;
  background-color: white;
  text-align: left;
}
.photo{
  width: 280px;
  height: 220px;
  object-fit: cover;
}
.content{
  padding: 10px 25px;
}
.content h3{
  margin: 10px 0;
  font-size: 1.2rem;
}
.content .time{
  font-size: 0.95rem;
}
</style>