<template>
  <div class="register">
    <div class="register-container">
      <h1>Register</h1>
      <Logo/>
      <p>Register to be our members and enjoy with us!</p>
      <form action=""  v-on:submit.prevent="postUser">
        <input type="text" placeholder="Fullname" required v-model="name">
        <input type="text" placeholder="Phone Number" required v-model="phoneNumber">
        <div class="more">
          <div class="checkbox">
            <input type="checkbox" required>
            <span>I agree to your terms and conditions.</span>
          </div>
        </div>
      <button>Register</button>
      </form>
      <div class="need-account">
        <p>Need help? </p>
        <router-link to="/login">Click here</router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import Logo from '../components/uncommon/Logo.vue'
export default ({
  name: 'Register',
  components: {
    Logo, 
  },
  created() {
    console.log(this.$route)
  }
  ,
  data() {
    return {
      name: '',
      phoneNumber: ''
    }
  },
  methods: {
    postUser: function(){
      axios.post('https://60d94868eec56d001747768f.mockapi.io/v1/users', {
        name: this.name,
        phoneNumber: this.phoneNumber
      });
      console.log(this.name)
      console.log(this.phoneNumber)
      alert('You have successfully registered !')
      this.$router.push(`/users`)
    }
  },
  
})
</script>

<style scoped>
a{
  color: #2c3e50;
  border-bottom: 1px solid white;
  transition: 0.2s;
}
a:active{
  color: #1e2731;
}
a:hover{
    border-bottom: 1px solid #2c3e50;
}
.register{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}
.register-container{
  width: 450px;
  padding: 1rem;
  margin: auto;
  text-align: center;
  box-shadow: 5px 5px 13px -4px rgba(0,0,0,0.71);

}
input{
  display: block;
  padding: 20px;
  border-radius: 10px;
  background-color: #f3f3f3;
  color: #2c3e50;
  width: 100%;
  outline: none;
  margin: 20px auto;
  border: none;
  box-sizing: border-box;
  transition: 0.4s;
  border: 1px solid white;
}
input:hover{
  border: 1px solid gray;
}
button{
  width: 100%;
  padding: 15px;
  font-size: 1.15rem;
  border-radius: 10px;
  border: 1px solid #1e2731;
  color: #2c3e50;
  margin: 20px auto;
  transition: 0.4s;
  cursor: pointer;
}
button:hover{
  background-color: #1e2731;
  color: white;
}
.more{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.9rem;
}
  .checkbox{
    display: flex;
    align-items: center;
  }

input[type="checkbox"]{
  width: fit-content;
  margin: 10px;
}

.need-account{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 1140px) {
  .content{
    font-size: 0.9rem;
  }
  h1{
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 992px) {
  .intro p{
    width: 60%;
  }
}
@media screen and (max-width: 768px) {
  .intro p{
    width: 80%;
  }
}
@media screen and (max-width: 576px) {
  .intro p{
    width: 80%;
    font-size: 1.1rem;
  }

}

</style>