<template>

<router-view
        
      
/>


</template>

<script>

export default {
  name: 'App',
  components: {
  
  }, data(){
    return{
      test:""
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  margin:0;
  height: 100vh;
  width: 1000vw;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  
}body{
  margin: 0;
}
::-webkit-scrollbar {
  display: none;
}
</style>
