<template>
    <div class="default-layout">
        <Navbar/>
        <slot/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
import Footer from '../components/common/Footer.vue'

export default ({
    components: {
        Navbar,
        Footer
    }
})
</script>

<style scoped>
.default-layout{
    margin: 0;
}
</style>