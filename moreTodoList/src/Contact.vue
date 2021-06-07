<template>
  <div class="contact">
    <h1>Contact</h1>
    <form id="contact-form">
      <div class="input-box">
          <label for="">Enter your name*</label>
          <input id="nameInput" type="text" oninvalid="invalidInput()" required>
      </div>
      <div class="input-box">
        <label for="">Enter your email*</label>
        <input id="emailInput" type="text" oninvalid="invalidInput()" required>
      </div>
      <div class="input-box">
        <label for="">Enter your subject*</label>
        <input id="subjectInput" type="text" oninvalid="invalidInput()" required>
      </div>
      
      <button type="submit">SEND MAIL</button>
    </form>
  </div>
  
  
</template>

<script>

export default {
  name: 'contact',
  data() {
    return {
      
    }
  },
  
}
</script>

<style>
.contact{
  padding: 10px;
  color: #645ce4;
}
.contact h1{
  padding: 20px 0 ;
  color: #645ce4;
  box-shadow: 0 3px #645ce4;
}
.input-box{
    position: relative;
    height: 50px;
    font-size: 1rem;
    padding: 0;
    display: flex;
    align-items: center;
    margin: 40px 15px;
    font-size: 1rem;
    color: #645ce4;
    border: 1px solid #645ce4;
    border-radius: 8px;
}
.input-box label{
    position: absolute;
    z-index: 10;
    display: inline-block;
    padding: 0 8px;
    top: -25px;
    left: 15px;
    transition: 0.2s;
    font-size: 1.1rem;
    color: #645ce4;
}
.input-box:hover label{
  top: -30px;
}
.input-box input{
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: #645ce4;
}
.contact button{
    margin: 0;
    width: 156px;
    letter-spacing: 0.1rem;
    height: 50px;
    color: white;
    background-color:#197fff;
    border: 0;
    position: relative;
    outline: none;
    cursor: pointer;
    font-size: 1.1rem;
    border-radius: 8px;
    transition: 0.2s;
}
.contact button:hover{
  background-color: #e45e;
}
</style>
