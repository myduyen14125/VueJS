<template>
  <div class="users">
    <h1>Lists of users</h1>
    
    <template v-for="user in users">
      <div class="user-container" :key="'user-'+user.id" @click="getUser(user.id)">
        <img class="photo" :src="user.avatar" alt="#">
        <div class="content">
          <h2 style="text-transform: uppercase">{{ user.name }}</h2>
          <em class="time" style="color: gray">Time join in: {{ user.createdAt }}</em>
          <h3 class="phone">Phone number: {{ user.phoneNumber }}</h3>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import axios from 'axios'
export default ({
  name: 'users',
  components: {
    
  },
  data() {
    return {
      users: 0,
    }
  },
  async created() {
    const response = await axios.get(`https://60d94868eec56d001747768f.mockapi.io/v1/users`)
    this.users = response.data
    console.log(response.data)
  },
  methods: {
    getUser(id){
      this.$router.push(`/user/${id}`) 
    },
  }
    
})
</script>

<style scoped>
.users{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.user-container{
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: 3px 4px 4px -5px rgba(0,0,0,0.71);
  width: 760px;
  margin: 1.6rem auto;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
}
.user-container:hover{
  box-shadow: 5px 8px 10px -5px rgba(0,0,0,0.71);
}
  img.photo{
    width: 250px;
    height: 180px;
    object-fit: cover;
  }
  .content{
    padding: 10px 25px;
  }
  .content h3{
    margin: 10px 0;
    font-size: 1.2rem;
  }
  .content .time{
    font-size: 0.95rem;
  }


/* Responsive */
@media screen and (max-width: 992px) {
  .content{
    font-size: 0.95rem;
  }
  .user-container{
    width: 700px;
  }
  img.photo{
    width: 240px;
    height: 160px;
  }
}
@media screen and (max-width: 768px) {
  .content{
    font-size: 0.8rem;
  }
  .user-container{
    width: 530px;
  }
  img.photo{
    width: 150px;
    height: 110px;
  }
  h3.phone{
    font-size: 1rem
  }
}
@media screen and (max-width: 567px){
  .content h3{
    font-size: 1rem;
  }
  .user-container{
    width: 90%;
  }
  img.photo{
    width: 130px;
    height: 100px;
  }
}
@media screen and (max-width: 420px){
  .user-container .content .time {
    display: none;
  }
}
</style>