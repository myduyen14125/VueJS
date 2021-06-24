<template>
  <div class="blog-detail">
    <!-- <h1>{{$route.params.id}}</h1> -->
    <h1>heheheh</h1>
    <div class="container" v-for="blog in blogs" :key="'blog-'+blog.id">
        <h1>hehehe</h1>
    </div>
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route);
    },
    props: ['blogs'],

}
</script>

<style scoped>

</style>