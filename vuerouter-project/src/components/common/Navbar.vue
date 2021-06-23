<template>
    <div class="nav">
        <button @click="$router.go(-1)">Back</button> |
        <router-link to="/home">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/blogs">Blogs</router-link> |
        <!-- <button @click="$router.push({
          name: 'Blogs'
        })">Blogs</button> -->
        <button @click="$router.go(1)">Forward</button>
    </div>
</template>

<script>

export default ({
    
})
</script>

<style scoped>

</style>