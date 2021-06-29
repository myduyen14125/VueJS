<template>
  <div class="sidebar">
    <div
      class="logo"
      @click="$router.push({
          path: '/',
        })">
      <div class="white" style="color: #2c3e50">nu</div>
      ntimum.
    </div>
    <ul class="dashboard-menu">
      <li>
        <div style="margin: 0 20px 0 30px; width:30px" class="fa fa-map-o"></div>
        <span>Dashboard</span>
      </li>
      <li>
        <div style="margin: 0 20px 0 30px; width:30px" class="fa fa-user-o"></div>
        <span>Profile</span>
      </li>
      <li>
        <div style="margin: 0 20px 0 30px; width:30px" class="fa fa-pencil"></div>
        <span>Write a Post</span>
      </li>
      <li>
        <div style="margin: 0 20px 0 30px; width:30px" class="fa fa-bookmark-o"></div>
        <span>All Posts</span>
      </li>
      <li>
        <div style="margin: 0 20px 0 30px; width:30px" class="fa fa-cube"></div>
        <span>Resources</span>
      </li>
      <li>
        <div style="margin: 0 20px 0 30px; width:30px" class="fa fa-cog"></div>
        <span>Settings</span>
      </li>
      <li @click="$router.push({
          path: '/',
        })">
        <div style="margin: 0 20px 0 30px; width:30px" class="fa fa-sign-out"></div>
        <span>Log Out</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuLists: [
        {
          id: 0,
          name: 'Dashboard',
          icon: '<div class="fa fa-map-o"></div>',
          active: true
        }
      ]
    }
  },
};
</script>

<style scoped>
a {
  color: white;
}
.sidebar {
  background-color: #1e2731;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 100vh;
  color: white;
  font-size: 1.15rem;
}
.logo {
  font-size: 30px;
  margin: 20px auto;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.white {
  background-color: white;
  position: relative;
  top: -8px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 55px;
  height: 45px;
  margin: 0px;
}
.dashboard-menu {
  height: 75vh;
}
ul {
  padding-inline-start: 0;
}
ul li {
  list-style: none;
  transition: 0.3s;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
li:hover{
  background-color: gray;
}
</style>
