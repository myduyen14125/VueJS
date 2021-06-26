<template>
    <div class="footer">
        <div class="content">
            <h1>Want to connect?</h1>
            <p>Contact us with the links in description below to get more information. Hope you enjoy your time on my website.</p>
            <a href="#"><div class="fa fa-twitter"></div></a>
            <a href="#"><div class="fa fa-instagram"></div></a>
            <a href=""><div class="fa fa-linkedin-square"></div></a>
        </div>
    </div>
</template>

<script>

export default ({
    
})
</script>

<style scoped>
a{
    color: white;
}
.footer{
    width: 97.8%;
    height: 40vh;
    position: relative;
    bottom: 0;
    left: 1.1%;
    background-color: #181f27;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
}
.content{
    width: 40%;
}
.fa{
    font-size: 1.7rem;
    margin: 15px;
    transition: 0.3s;
}
.fa:hover{
    color: gray;
}
</style>