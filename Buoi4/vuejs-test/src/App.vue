<template>
  <div id="app" >
    <nav class="navbar">
      <ul>
        <li v-on:click="changeComponent(0, 'home')" v-bind:class="{available: components[0].available}">Home</li>
        <li v-on:click="changeComponent(1, 'contact')" v-bind:class="{available: components[1].available}">Contact</li>
        <li v-on:click="changeComponent(2, 'blog')" v-bind:class="{available: components[2].available}">Blogs</li>
      </ul>
      
    </nav>
    
    <div class="content">
      <component :is="activeComponent"></component>
    </div>
    
    
  </div>
</template>

<script>
import Home from './Home.vue'
import Contact from './Contact.vue'
import Blog from './Blog.vue'

export default {
  components: {
    Home,
    Contact,
    Blog
  },
  name: 'app',
  data () {
    return {
      activeComponent: 'home',
      components: [
        {
          key: 'home',
          component: () => Home,
          available: true,
        },
        {
          key: 'contact',
          component: () => Contact,
          available: false,
        },
        {
          key: 'blog',
          component: () => Blog,
          available: false,
        }
      ]
    }
  },
  methods: {
    changeComponent(index, active) {
      this.activeComponent = active
      if(this.components[index].key === active){
        this.components[0].available = false
        this.components[1].available = false
        this.components[2].available = false
        this.components[index].available = true
      }
    }
  },

}
</script>

<style>
*{
    font-family: Helvetica;
    margin: auto;
    box-sizing: border-box;
    color: white;
}
body{
    background: #645ce4;
    height: 120vh;
}
ul{
  padding-inline-start: 0;
}
li{
  list-style: none;
}
.navbar{
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 0;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.375);
}
.navbar ul{
  display: flex;
  width: 600px;
  justify-content: space-between;
  padding: 0;
  height: 100%;
}
.navbar ul li{
    width: 200px;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
}
.navbar ul li:hover{
  color: white;
  background-color: #e45e;
}

.content{
    margin: auto;
    color: #645ce4;
    width: 600px;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.575);
    text-align: center;
    margin-top: 100px;
}
.available{
  background-color: #e45e;
}
</style>
