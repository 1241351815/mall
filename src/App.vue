<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Storage from './storage'
export default {
  name: 'app',
  components: {

  },
  mounted() {
    Storage.setItem('age',"30","user")
     Storage.clear("name","user")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
{"user":{"name":"tt","age":"30"}}
