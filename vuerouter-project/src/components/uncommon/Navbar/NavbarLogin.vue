<template>
    <div class="nav">
      <div class="left-nav">
        
      </div>
      <div class="right-nav">
        <div class="fa fa-search" style="margin: auto 15px"></div>
        <div class="fa fa-bell-o" style="margin: auto 15px"></div>
        <div class="avt" style="margin: auto 15px">
          <img src="https://c.wallhere.com/photos/de/31/Kyoukai_no_Kanata_anime_Kuriyama_Mirai-53836.png!d">
        </div>
      </div>
        <!-- <button @click="$router.go(-1)">Back</button> |
        <button @click="$router.go(1)">Forward</button> -->
    </div>
</template>

<script>
export default ({
    data(){
      return {

      }
    }
})
</script>

<style scoped>
.nav{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 7vh;
  /* box-shadow: 0 4px 6px -2px gray; */
  margin: 0;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
.right-nav{
  display: flex;
  justify-content: flex-end;
  justify-content: center;
}
.avt img{
  border-radius: 100%;
  width: 35px;
  height: 35px;
  object-fit: cover;
  cursor: pointer;
}
.fa{
  cursor: pointer;
}
a{
  margin: 0 20px;
  color: #2c3e50;
  transition: 0.4s;
  border-bottom: 5px solid white;
}
a:hover{
  border-bottom: 5px solid #2c3e50;
}
</style>