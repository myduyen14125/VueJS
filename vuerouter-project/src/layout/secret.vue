<template>
    <div class="secret-layout">
        <Sidebar/>
        <div class="content">
            <slot/>
        </div>
        
    </div>
</template>

<script>
import Sidebar from '../components/common/Sidebar.vue'
export default ({
    components: {
        Sidebar
    }
})
</script>

<style scoped>
.secret-layout{
    display: flex;
    overflow-x: hidden;
}
Sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
}
.content{
    width: calc(100% - 250px);
}
</style>