<template>
    <div class="author">
        <span style="display: block; color: gray">ABOUT THE AUTHOR</span>
        <div class="box">
            <img src="https://c.wallhere.com/photos/de/31/Kyoukai_no_Kanata_anime_Kuriyama_Mirai-53836.png!d" alt="">
            <div class="content">
                <h2>{{ author.name }}</h2>
                <h5 style="color: gray">{{ author.nickname }}</h5>
                <p>{{ author.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    data(){
        return {
            author: {
                name: 'Yuu Haki',
                nickname: '@yuuhaki',
                website: 'https://www.facebook.com',
                description: 'Hehe a weird girl desires little strange thing.'
            }
        }
    }
})
</script>

<style scoped>
.author{
  width: 400px;
  margin: 30px auto;
}
.box{
    display: flex;
    align-items: center;
}
img{
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100%;
    margin: 20px;
}
</style>