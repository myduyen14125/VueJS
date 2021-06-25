<template>
  <div class="blogs">
    <h1>This is blogs page</h1>
    <template v-for="blog in blogs">
      <div class="blog-container" :key="'blog-'+blog.id" @click="$router.push(/blog/+blog.id)" >
        <img :src="blog.thumbnail" alt="#" style="width: 150px;">
        <div class="content-container">
          <h2>{{ blog.title }}</h2>
          <em>{{ blog.desciption }}</em>
          <p>{{ blog.content }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {bus} from '../main'
export default ({
  name: 'Blogs',
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
  border: 1px solid gray;
  border-radius: 10px;
  max-width: 600px;
  margin: 1rem auto;
}
</style>