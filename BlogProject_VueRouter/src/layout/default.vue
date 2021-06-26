<template>
    <div class="default-layout">
        <Navbar/>
        <slot/>
    </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'

export default ({
    components: {
        Navbar
    }
})
</script>

<style scoped>
.default-layout{
    margin: 0;
}
</style>