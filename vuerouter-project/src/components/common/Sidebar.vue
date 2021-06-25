<template>
    <div class="sidebar">
        <div class="logo" @click="$router.push({
          path: '/home'
        })">
          <div class="black"></div>
          <span style="color: white">nu</span>ntimum.
        </div>
    </div>
</template>

<script>

export default ({
    
})
</script>

<style scoped>
.sidebar{
    /* background-color: #1e2731; */
    background-color: red;
    width: 250px;
    height: 100vh;
}
</style>