<template>
    <div class="secret-layout">
        <Sidebar/>
        <div class="content">
            <Navbarlogin/>
            <slot/>
        </div>
        
    </div>
</template>

<script>
import Sidebar from '../components/common/Sidebar.vue'
import Navbarlogin from '../components/uncommon/Navbar/NavbarLogin.vue'
export default ({
    components: {
        Sidebar,
        Navbarlogin
    }
})
</script>

<style scoped>
.secret-layout{
    display: flex;
    overflow-x: hidden;
}
.sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
}
.content{
    width: calc(100% - 250px);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 250px;
}
</style>