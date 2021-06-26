<template>
  <div class="blog-detail">
    <!-- <h1>{{$route.params.id}}</h1> -->
    <img :src="blogs[$route.params.id].thumbnail" alt="">
    <div class="container">
      <h2>{{blogs[$route.params.id].title}}</h2>
      <em style="color: gray">{{blogs[$route.params.id].createdAt}}</em> |
      <em style="color: gray"><strong>{{blogs[$route.params.id].description}}</strong></em>
      <p>{{blogs[$route.params.id].content}}</p><br>
      <p>{{blogs[$route.params.id].content}}</p><br>
      <p>{{blogs[$route.params.id].content}}</p><br>

    </div>
    
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'
export default {
  components: {
    Footer
  },
  created() {
    console.log(this.$route.params.id)
    console.log(this.$route);
  },
  data() {
    return {
      blogs: [
        {
          "id": "0",
          "categoryId": "2",
          "createdAt": "2021-04-23T09:07:41.855Z",
          "title": "Cross-platform",
          "thumbnail": "https://images8.alphacoders.com/519/thumb-1920-519517.jpg",
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
  computed: {
    activeBlog() {
      return 1
    }
  }
  
};
</script>

<style scoped>
.blog-detail{
  margin: 2rem 0;
}
.blog-detail img{
  width: 97.8%; 
  height: 65vh;
  object-fit: cover;
}
.container{
  width: 55%;
  text-align: left;
  margin: 50px auto;
}
@media screen and (max-width: 992px) {
  .container{
    width: 75%;
    text-align: left;
    margin: 50px auto;
  }
}
</style>
