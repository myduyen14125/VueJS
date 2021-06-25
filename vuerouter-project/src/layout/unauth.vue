<template>
    <div class="unauth-layout">
        Unauth here
        Hhehe vô được unauth rồi nè 
        <slot/>
    </div>
</template>

<script>

export default ({
    
})
</script>

<style scoped>
.unauth-layout{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>