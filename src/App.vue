<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to='/app'><h2>客户端</h2></router-link>
    <router-link to='/'><h2>管理端</h2></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
