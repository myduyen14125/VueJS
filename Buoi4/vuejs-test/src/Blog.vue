<template>
  <div id="blog" class="blog">
    <h1>Blogs</h1>
    <ul>
      <li v-for="blog in blogs">
        <img v-bind:src="blog.thumbnail" alt="">
        <div class="content-box">
          <h3>{{ blog.title }}</h3>
          <p>{{ blog.content }}</p>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'blog',
  data() {
    return {
      blogs: [
        {
          title: "Cross-platform",
          thumbnail: "http://lorempixel.com/640/480/animals",
          content: "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
        },
        {
          title: "Cross-platform",
          thumbnail: "http://lorempixel.com/640/480/transport",
          content: "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
        },
        {
          title: "Cross-platform",
          thumbnail: "http://lorempixel.com/640/480/city",
          content: "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
        },
        {
          title: "Cross-platform",
          thumbnail: "http://lorempixel.com/640/480/cats",
          content: "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
        },

      ]
    }
  },
  
}
</script>

<style>
.blog{
  padding: 10px;
}
.blog h1{
  padding: 20px 0 ;
  color: #645ce4;
  box-shadow: 0 3px #645ce4;
}
.blog ul li{
  display: flex;
  color: #645ce4;
  margin: 30px 20px;
  padding: 10px 0;
  border-bottom: 1px solid#645ce4;;
}
.blog ul li h3, p{
  color: #645ce4;
}
.blog img{
  width: 150px;
  height: 150px;
}
</style>
