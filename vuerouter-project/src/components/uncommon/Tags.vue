<template>
    <div class="tags">
        <div class="search-bar">
            <input type="text" placeholder="Find the topics you care about...">
            <div class="fa fa-search"></div>
        </div>
        <div class="search-item">
            <button v-for="item in searchItems" :key="search-item">{{ item.hashtag }}</button>
        </div>
    </div>
</template>

<script>

export default ({
    name: 'Tags',
    data() {
        return {
            searchItems: [
                {
                    hashtag: "#technology",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#lifeandlove",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#essentialism",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#webdevelopment",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#fashion",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#architecture",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#sports",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#entertainment",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#graphicdesign",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#travel",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#anime",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#worldhistory",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#computers",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#minimalism",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#novels",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#filmmaking",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#smartphones",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#security",
                    content: "Hehe abcd"
                },
                {
                    hashtag: "#occupation",
                    content: "Hehe abcd"
                },
            ]
        }
    }
})
</script>

<style scoped>
.tags{
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.search-bar{
    width: 600px;
    margin: 80px auto;
    position: relative;
}
input{
  display: block;
  padding: 15px;
  border-radius: 15px;
  color: #2c3e50;
  width: 100%;
  outline: none;
  margin: 20px auto;
  box-sizing: border-box;
  transition: 0.4s;
  border: 1px solid gray;
  font-size: 1.1rem;
}
input:hover{
  border: 1px solid #2c3e50;
}
.search-bar .fa{
    position: absolute;
    right: 20px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: gray;
    cursor: pointer;
    transition: 0.3s;
}
.search-bar .fa:hover{
    color: #2c3e50;
}
.search-item{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: auto;
    margin-bottom: 120px;
    justify-content: center;
}
.search-item button{
    margin: 15px;
    padding: 10px;
    border: 1px solid #2c3e50;
    color: #2c3e50;
    border-radius: 13px;
    background-color: white;
    transition: 0.3s;
    cursor: pointer;
}
.search-item button:hover{
    background-color: #f3f3f3;
}
</style>