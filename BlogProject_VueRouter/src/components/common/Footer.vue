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
/* Responsive */
@media screen and (max-width: 992px) {
  .content{
      width: 60%;
  }
  h1{
      font-size: 1.6rem;
  }
  p{
      font-size: 1rem;
  }
}
@media screen and (max-width: 768px){
  .content{
      width: 70%;
  }
  p{
      font-size: 0.95rem;
  }
  .fa{
      font-size: 1.4rem;
  }
}
@media screen and (max-width: 500px){
  .content{
      width: 75%;
  }
  h1{
      font-size: 1.3rem;
  }
  p{
      font-size: 0.85rem;
  }
}
@media screen and (max-width: 420px){
  .content{
      width: 85%;
  }
}
</style>