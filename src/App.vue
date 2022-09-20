<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      test: "",
      connection: null,
    };
  },mounted(){
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
}

  },
  created: function () {
    console.log("Starting connection");
    this.connection = new WebSocket("wss://echo.websocket.org");

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Successfully connect to the echo Websocket Server");
    };
    this.connection.onmessage = function (event) {
      console.log(event);
    };
  },
};
</script>

<style>
@font-face {
  font-family: "TTNormsThin";
  src: local("TTNorms-Bold"), url(./Fonts/TTNorms-Thin.otf) format("truetype");
}
@font-face {
  font-family: "TTNormsBold";
  src: local("TTNorms-Bold"), url(./Fonts/TTNorms-Medium.otf) format("truetype");
}

#app {
  font-weight: bold;
  font-family: TTNormsThin;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin: 0;
  height: 100vh;
  width: 1000vw;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
body {
  margin: 0;
}
::-webkit-scrollbar {
  display: none;
}
</style>
