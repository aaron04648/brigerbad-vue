<template>
  <router-view 
  />

</template>

<script>

export default {
  name: "App",
  components: {},
  data() {
    return {
      test: [],
      connection: null,
    };
  }, 

};
</script>

<style>
@font-face {
  font-family: "TTNormsProNormal";
  src: local("TTNorms-Thin"), url(./Fonts/TTNormsProNormal.ttf) format("truetype");
}
@font-face {
  font-family: "TTNormsProBold";
  src: local("TTNorms-Thin"), url(./Fonts/TT-Norms-Bold.ttf) format("truetype");
}



#app {
  overflow: hidden;
  font-weight: bold;
  font-family: TTNormsProNormal;
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

}
body {
  margin: 0;
}
::-webkit-scrollbar {
  display: none;
}
</style>
