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

</style>