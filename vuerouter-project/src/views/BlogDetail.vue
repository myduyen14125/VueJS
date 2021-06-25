<template>
  <div class="blog-detail">
    <!-- <h1>{{$route.params.id}}</h1> -->
    <img :src="blogs[$route.params.id].thumbnail" alt="">
    <div class="container">
      <h2>{{blogs[$route.params.id].title}}</h2>
      <em>{{blogs[$route.params.id].createdAt}}</em> |
      <em><strong>{{blogs[$route.params.id].description}}</strong></em>
      <p>{{blogs[$route.params.id].content}}</p>

    </div>
    
  </div>
</template>

<script>

export default {
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
          "title": "cross-platform",
          "thumbnail": "http://lorempixel.com/640/480/animals",
          "description": "Legacy",
          "content": "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
        },
        {
          "id": "1",
          "categoryId": "3",
          "createdAt": "2021-04-23T14:57:39.459Z",
          "title": "Bedfordshire",
          "thumbnail": "http://lorempixel.com/640/480/transport",
          "description": "Investor",
          "content": "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!"
        },
        {
          "id": "2",
          "categoryId": "4",
          "createdAt": "2021-04-23T13:31:36.828Z",
          "title": "programming application quantify",
          "thumbnail": "http://lorempixel.com/640/480/city",
          "description": "Dynamic",
          "content": "Use the redundant TCP capacitor, then you can parse the redundant monitor!"
        }
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
  width: 90%; 
  height: 50vh;
  object-fit: cover;
}
.container{
  width: 75%;
  margin: auto;
}
</style>
