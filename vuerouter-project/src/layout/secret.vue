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
}
Sidebar{
    position: fixed;
    top: 0;
    left: 0;
}

</style>