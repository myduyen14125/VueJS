<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <test></test>
  </div>
</template>

<script>
import Test from './test.vue'

export default {
  components: {
    test: Test,
  },
  name: 'app',
  data () {
    return{
      title: "Your first Vue file! "
    }
  },
  
}
</script>

<style>

</style>
