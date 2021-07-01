<template>
  <div class="user-detail">
    <!-- <h1>{{$route.params.id}}</h1> -->
    <div class="cover">
      <img :src="user.avatar" alt="">
      <h1 style="text-align: center">{{user.name}}</h1>
      <div class="edit-profile">
        <button class="big-edit" @click="editProfile">Edit Profile</button>
        <div class="menu-edit" id="menu-edit">
          <button @click="editName">Edit Username</button>
          <button @click="editPhone">Edit Phone Number</button>
          <button @click="deleteUser(user.id)">Delete Account</button>
          <hr style="margin: 1px">
          <button @click="cancelEdit">Cancel</button>
        </div>
      </div>
      
      <div id="edit-modal" class="edit-modal">
        <div class="modal-content">
          <h3>Edit your information below here !</h3>
          <hr>
          <form action=""  v-on:submit.prevent="successEdit(user.id)">
            <input v-model="currentInput" type="text" required>
            <button type="submit">Submit</button>
            <button @click="cancelModal">Cancel</button>
          </form>

        </div>
      </div>
    </div>
    
    <div class="container">
      <div style="text-align: center; font-size: 1.2rem; margin-bottom: 50px">
        | <em style="color: gray;">Time join in: {{user.createdAt}}</em> | <br><br>
        <em><strong>Phone number: {{user.phoneNumber}}</strong></em>
      </div>    
        
      
      <p>{{user.information}}</p><br>
      <p>{{user.information}}</p><br>
      <p>{{user.information}}</p><br>
      <Author/>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import Author from '../components/uncommon/Author.vue'

export default {
  components: {
    Author
  },
  data() {
    return {
      user: {},
      currentInput: null,
      edit: ''
    }
    
  },
  async created() {
    const response = await axios.get(`https://60d94868eec56d001747768f.mockapi.io/v1/users/${this.$route.params.id}`)
    this.user = response.data
    console.log(response)
  },
  methods: {
    editProfile(){
      document.getElementById('menu-edit').style.display = "block";
    },
    editName(){
      this.edit = 'name';
      document.getElementById('edit-modal').style.display = "block";
      document.getElementById('menu-edit').style.display = "none";
      //Instead of using JS, can also v-bind:class for element, then active the class true/false.
    },
    editPhone(){
      this.edit = 'phone';
      document.getElementById('edit-modal').style.display = "block";
      document.getElementById('menu-edit').style.display = "none";
    },
    successEdit(id){
      if(this.edit === 'name'){
        axios.put(`https://60d94868eec56d001747768f.mockapi.io/v1/users/${id}`,
        {
          name: this.currentInput,
        })
        this.user.name = this.currentInput
        // Another solution, use async await but it a little slower so I comment here, hehe. 
        // const response = await axios.get(`https://60d94868eec56d001747768f.mockapi.io/v1/users/${id}`)
        // console.log(response)
        // this.user.name = response.data.name
      }
      if(this.edit === 'phone'){
        axios.put(`https://60d94868eec56d001747768f.mockapi.io/v1/users/${id}`,
        {
          phoneNumber: this.currentInput,
        })
        this.user.phoneNumber = this.currentInput
      }
      this.currentInput = ''
      document.getElementById('edit-modal').style.display = "none";
    },
    cancelEdit(){
      document.getElementById('menu-edit').style.display = "none";
    },
    cancelModal(){
      document.getElementById('edit-modal').style.display = "none";
    },
    deleteUser(id){
      alert('You decide to delete !')
      axios.delete(`https://60d94868eec56d001747768f.mockapi.io/v1/users/${id}`)
      this.$router.push(`/users`)
    }
  }
};
</script>

<style scoped>
.user-detail{
  margin: 0;
  min-height: 40vh;
}
.user-detail img{
  width: 70%; 
  height: 93%;
  object-fit: cover;
  position: relative;
  border-radius: 10px;
}
.container{
  width: 55%;
  text-align: left;
  margin: 50px auto;
}
button{
  margin-right: 15px;
  background-color: white;
  padding: 8px 15px;
  border: 1px solid #f8f8f8;
  border-radius: 5px;
  font-size: 0.95rem;
  transition: 0.4s;
  cursor: pointer;
}
button:hover{
  background-color: #f2f2f2;
}
.cover{
  position: relative;
  padding: 0;
  height: 65vh;
  background: linear-gradient(180deg, #dddddd, white);
  padding-bottom: 50px;
  box-sizing: border-box;
  box-shadow: 3px 3px 5px -4px rgba(0,0,0,0.71);
}
.edit-profile{
  position: absolute;
  top: 70%;
  right: 18%;
  width: 230px;
  text-align: right;
  padding: 0;
}
  .big-edit{
    width: 150px;
    margin: 0;
    border: 1px solid gray;
  }
  .menu-edit{
    width: 100%;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
    box-sizing: border-box;
    display: none;
    transition: 0.3s;
    box-shadow: 3px 4px 10px -5px rgba(0,0,0,0.71);
  }
    .menu-edit button{
      width: 100%;
      text-align: left;
    }

/* Modal */
.edit-modal{
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
  .modal-content{
    margin: 12% auto;
    padding: 10px;
    width: 400px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    background-color: white;
    border-radius: 6px;
    animation-name: modalopen;
  }
  input{
    display: block;
    padding: 15px;
    border-radius: 10px;
    background-color: #f3f3f3;
    color: #2c3e50;
    width: 90%;
    margin: 20px auto;
    border: none;
    box-sizing: border-box;
    transition: 0.4s;
    border: 1px solid white;
  }
  input:hover{
    border: 1px solid gray;
  }
  .modal-content button{
    border: 1px solid #2c3e50;
  }

@media screen and (max-width: 992px) {
  .container{
    width: 75%;
    text-align: left;
    margin: 50px auto;
  }
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
