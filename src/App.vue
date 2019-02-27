<template>
  <div id="app">
   <ai></ai>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import ai from '@/components/ai'
export default {
  name: 'App',
  components:{
  ai
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main{
  float: left;
  width: 96%;
  background-color: #EFF2F7;
  height: 100%;
  overflow: hidden;
}
</style>
