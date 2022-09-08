<template id="Sprechblase" >
  <h1 id="title">Brigenia-Talk</h1>
  <img id="animation" src="../assets/Projekt_Brigerbad.jpg" alt="" />
  <div v-for="item in data" :key="item.id">
    <button @click="Zustandwetter()">piolkß</button>
    <div id="bubble1">
      {{ item.textblaseoben
      }}<span style="font-size: 200%; float: right; overflow-wrap: break-word"
        >🦆</span
      >
    </div>

    <div id="bubble2">
      {{ item.textunten_Zeile_1 }} <br />
      <span style="font-size: 4vw; float: right; overflow-wrap: break-word">{{
        this.AnzeigeWetter
      }}</span>
    </div>
  </div>

  <embed src="" type="" />
</template>

<script>
import jsonData from ".//BrigeniaSprechblasen.json";
export default {
  data() {
    return {
      data: jsonData,

      Zustand: "",
      AnzeigeWetter: "☀️",
    };
  },
  methods: {
    Zustandwetter: function () {
      this.data.forEach((element) => {
        console.log(element.wetter);
        let test = String(element.wetter);
        if (test == "sonne") {
          this.AnzeigeWetter = "☀️";
          element.textunten_Zeile_1 = "es scheint die Sonne";
        } else if (test == "regen") {
          element.textunten_Zeile_1 = "es regnet";
          this.AnzeigeWetter = "🌧";
        } else if (test == "bewölkt") {
          element.textunten_Zeile_1 = "Es ist bewölkt";
          this.AnzeigeWetter = "🌤";
        }
      });
    },
  },
  created() {
    this.Zustandwetter();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  max-width: 100%;
  max-height: 100%;
}
h1 {
  font-size: 90px;
  position: relative;
  left: 3%;
}
#bubble1 {
  text-align: left;
  overflow-wrap: break-word;
  margin-top: 2%;
  margin-left: 50%;
  position: relative;
  background: white;
  color: #000000;
  font-family: Times New Roman;
  font-size: 30px;
  line-height: 62px;

  width: 43%;
  height: 3%;
  border-radius: 10px;
  padding: 2vw;
  margin-right: 5%;
}
#bubble1:after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  z-index: 1;
  border-style: solid;
  border-width: 30px 40px 0 0;
  border-color: white transparent transparent transparent;
  bottom: -30px;
  left: 15%;
  margin-left: -20px;
}
#bubble2 {
  padding: 2vw;
  overflow-wrap: break-word;
  margin-top: 2%;
  margin-left: 58%;
  position: relative;
  background: White;
  color: #000000;
  font-family: Times New Roman;
  font-size: 30px;
  line-height: 62px;

  width: 35%;
  height: auto;
  border-radius: 10px;
  padding-bottom: 1%;
  padding-top: 1%;
}
#bubble2:after {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  z-index: 1;
  border-style: solid;
  border-width: 30px 40px 0 0;
  border-color: White transparent transparent transparent;
  bottom: -30px;
  left: 15%;
  margin-left: -20px;
}
.ProjektBrigerbad {
  margin-top: 9.6%;
  float: left;
  position: relative;
  left: 4%;
}
#animation {
  margin-left: 0;
  margin-top: 1vw;
  width: 20vw;
  height: auto;
  float: left;
}
</style>