<template>
  <div id="####">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  name: '####',
  data () {
    return{
      title: "Your first Vue file! "
    }
  },
  methods: {
      greeting: function(){
        return "yahooooo!";
      }
  }
}
</script>

<style>

</style>
