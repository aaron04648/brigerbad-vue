
<template>
  <div id="main">
   
    <div class="container">
      <table class="content">
        <thead>
          <tr>
            <th style="font-family: TTNormsProBold">PROGRAMM</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, k) in Programm"
            v-on:update="Clock(item, k)"
            :key="item.id"
            :class="{ applyBlue: Timeleft(item, k) }"
          >
            <div id="trow">
              <td>
                {{ item.beginTime }}
              
              {{ item.Event }}</td>
            </div>
          </tr>
        </tbody>
      </table>

      <div class="PieContainer">
        <div id="Pieoben">
          <h1 id="PieObenH1">{{this.nexProgramm}}</h1>
          <p id="PieTime1">
            <span class="Ziffer"
              ><span style="font-size: 4.5vw">120</span><br />
              min</span
            >
          </p>
          <img src="../assets/icone-face.svg" id="Watch" alt="" />

          <div id="part2">
            <Piechart
              :Chartdata1="Chartdata1"
              :Chartdata2="Chartdata2"
              :styles="styles"
              id="pie1"
            />
          </div>
        </div>
        <div id="Pieunten">
          <h1 id="PieUntenH1">{{this.secondnexProgramm}}</h1>
          <p id="PieTime2">
            <span class="Ziffer"
              ><span style="font-size: 4.5vw">1</span> <br />
              min</span
            >
          </p>
          <img src="../assets/icone-face.svg" id="Watch2" alt="" />

          <div id="part2">
            <Piechartunten
              :Chartdata1="Chartdata1"
              :Chartdata2="Chartdata2"
              :styles="styles"
              id="pie2"
            />
          </div>
        </div>
      </div>
      <div class="rightbox">
        <div  id="Commercial1">
        <img class="CommercialImg" src="../assets/icon-behandlung.svg" alt="" />
        <div class="box">
          <h2 class="CommercialTitle">{{ this.CommercialTitle }}</h2>
          <h3 class="Commercialtext">{{ this.CommercialText }}</h3>
        </div>
      </div>
      
     
        <div  id="Commercial2">
        <img class="CommercialImg" src="../assets/icon-behandlung.svg" alt="" />
        <div class="box">
          
            <h2 class="CommercialTitle">{{ this.CommercialTitle }}</h2>
            <h3 class="Commercialtext">{{ this.CommercialText}}</h3>
          
          
        </div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
//import { doc, updateDoc } from "firebase/firestore";
import Piechart from "./ChildPie.vue";
import Piechartunten from "./PieUnten.vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../service/db";
export default {
  components: {
    Piechart,
    Piechartunten,
  },
  data() {
    return {
      styles: { type: Object, default: () => {} },
      WhichID: undefined,
      Event: undefined,
      Programm: undefined,
      nexProgramm:"",
      secondnextProgramm:"",
     
      timenow: "",
      time2: "",
      time3: "",
      
      applyBlueData: false,
      index: 0,
      CommercialText: "",
      CommercialTitle: "",
    };
  },
  watch: {},
  methods: {
    Timeleft: function (item, k) {
      var timeNow = new Date();
      var time2 = new Date();
      time2.setHours(item.hour);
      time2.setMinutes(item.min);
      time2.setSeconds(0);
      var time3 = new Date();
      var time4 = new Date();
      if (this.Programm[k + 1] === undefined) {
        return time2 < timeNow;
      }
      if (this.Programm[k + 2] === undefined) {
        return time2 < timeNow;
      }
      if (item === undefined) {
        return time2 < timeNow;
      }
      time4.setHours(this.Programm[k + 2].hour);
      time4.setMinutes(this.Programm[k + 2].min);
      time4.setSeconds(0);
      time3.setHours(this.Programm[k + 1].hour);
      time3.setMinutes(this.Programm[k + 1].min);
      time3.setSeconds(0);
      this.time3 = time3;
      this.time2 = time2;
      this.timenow = timeNow;
      this.nexProgramm = this.Programm[k +1].Event
      this.secondnexProgramm = this.Programm[k +1].Event
      console.log(this.secondnexProgramm)
      return time2 < timeNow && timeNow < time3;
    },
    /* async clock() {
      for (let index = 0; index < this.Programm.length; index++) {
        var timeNow = new Date();
        var time2 = new Date();
        time2.setHours(this.Programm[index].hour);
        time2.setMinutes(this.Programm[index].min);
        time2.setSeconds(0);
        var time3 = new Date();
        var time4 = new Date();
        if (this.Programm[index + 1] === undefined) {
          return time2 < timeNow;
        }
        if (this.Programm[index + 2] === undefined) {
          return time2 < timeNow;
        }
        if (this.Programm[index] === undefined) {
          return time2 < timeNow;
        }
        time4.setHours(this.Programm[index + 2].hour);
        time4.setMinutes(this.Programm[index + 2].min);
        time4.setSeconds(0);
        time3.setHours(this.Programm[index + 1].hour);
        time3.setMinutes(this.Programm[index + 1].min);
        time3.setSeconds(0);
        this.time3 = time3;
        this.time2 = time2;
        this.timenow = timeNow;
        if (time2 < timeNow && timeNow < time3) {
          var h1 = (timeNow.getHours() - time2.getHours()) * 60;
          var min1 = timeNow.getMinutes() - time2.getMinutes();
          var tot1 = h1 + min1;
          var h2 = (time3.getHours() - timeNow.getHours()) * 60;
          var min2 = time3.getMinutes() - timeNow.getMinutes();
          var tot2 = h2 + min2;
          var h3 = (time4.getHours() - timeNow.getHours()) * 60;
          var min3 = time4.getMinutes() - timeNow.getMinutes();
          var tot3 = h3 + min3;

          const washingtonRef = doc(db, "Clock", "Times");
        
          await updateDoc(washingtonRef, {
            Chartdata1: tot1,
            Chartdata2: tot2,
            Chartdata3: tot3,
          });
        }
      }
    },*/
  },
  mounted() {
    /*  onSnapshot(collection(db, "Clock"), (querySnapshot) => {
      const data2 = [];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          Intervalltest: doc.data().Chartdata2,
          Chartdata3: doc.data().Chartdata3,                  
        };
        data2.push(data);
      });
      console.log(data2);
      this.Intervalltest = data2[0].Intervalltest;
      this.Chartdata3 = data2[0].Chartdata3;
      console.log();
    });*/
    onSnapshot(collection(db, "Clock Events"), (querySnapshot) => {
      const data2 = [];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          Aktion: doc.data().Aktion,

          d1: doc.data().d1,
        };
        data2.push(data);
      });
      
      this.Event = data2;
      var lastindex = data2.length -1
      this.CommercialText = data2[lastindex].d1;
      this.CommercialTitle = data2[lastindex].Aktion;
      this.CommercialText2 = data2[1].d1;
      this.CommercialTitle2 = data2[1].Aktion;
      var index = 0;
      var index2 = 1;
      setInterval(() => {
      

    
 if (data2.length == index) {
          index = 0;
        }
        if (data2.length == index2) {
          index2 = 0;
        }
    
        this.CommercialTitle = data2[index].Aktion;
        this.CommercialText = data2[index].d1;
        this.CommercialTitle2 = data2[index2].Aktion;
        this.CommercialText2 = data2[index2].d1;
        index = index + 1;
        index2 = index2 + 1;
       
      }, 15000);
    });
    onSnapshot(collection(db, "ClockProgramm"), (querySnapshot) => {
      const data2 = [];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          Event: doc.data().Event,
          beginTime: doc.data().beginTime,
          hour: doc.data().hour,
          min: doc.data().min,
        };
        data2.push(data);
      });

      this.Programm = data2;
    });
  },
  computed() {},
};
</script>

<style scoped>
.Ziffer {
  margin-top: 2.8vw;

  padding-bottom: 1vw;
  z-index: 1;
  vertical-align: middle;
  font-size: 3vw;
}

.Commercialtext {
  font-size: 1.8vw;
  margin-top: 2vw;
  margin-right: 5vw;
  margin-left: 2vw;
  margin-bottom: 10vw;
}
.CommercialTitle {
  font-family: TTNormsProBold;
  font-size: 2.5vw;
  margin: 2vw;
  margin-right: 7vw;
}
.CommercialImg {
  width: 14vw;
  height: auto;
  margin: 2vw;
  margin-top: 6vw;
  margin-left: 6vw;
}

#PieTime2 {
  vertical-align: middle;
  font-family: TTNormsProBold;
  text-align: center;
  font-size: 3vw;
  z-index: 1;

  width: 100%;
  display: flex;
  justify-content: center;
}
#PieUntenH1 {
  font-family: TTNormsProBold;
  text-align: center;
  font-size: 1.8vw;
  margin: 0;
}
#pie2 {
margin-top: -15.8vw;
  margin-left: 3.9vw;
  width: 12vw;
  height: auto;
  z-index: -2;
  padding: 0;
}
#Watch2 {
  top: 6.3vw;
  margin-left: 2.5vw;
  width: 15vw;
  height: auto;

  padding: 0;
  position: absolute;
}
#PieTime1 {
  vertical-align: middle;
  font-family: TTNormsProBold;
  text-align: center;
  font-size: 3vw;
  z-index: 1;

  width: 100%;
  display: flex;
  justify-content: center;
}
#PieObenH1 {
  font-family: TTNormsProBold;
  text-align: center;
  font-size: 1.8vw;
  margin: 0;
}
#pie1 {
  margin-top: -15.8vw;
  margin-left: 3.9vw;
  width: 12vw;
  height: auto;
  z-index: -2;
  padding: 0;
}
#Watch {
  top: 6.3vw;
  margin-left: 2.5vw;
  width: 15vw;
  height: auto;

  padding: 0;
  position: absolute;
}
.applyBlue {
  background-color: #ab6e64;
}
#title1 {
  position: relative;
  top: 5vw;
  padding: 0;
}

table {
  border: none;
}
table.content {
  background-color: rgb(0, 0, 0, 0.8);
  color: white;
  padding-left: 1vw;
  margin-top: 4vw;
  margin-left: 4vw;
  padding-right: 10vw;

  border: none;
}
table.content thead tr {
  color: white;
  font-size: 5vh;
  float: left;
  padding-left: 1.5vw;
  margin-bottom: 1.5vw;
  padding-top: 1vw;
  border: none;
}
table.content tbody tr {
  color: white;
  
  float: left;
  border: none;
  margin: 0.6vw;
}
table.content tbody td {
  float: left;
  font-size: 1.8vw;
  padding-left: 1vw;
  padding-right:0.6vw ;
  padding-bottom: 0.5vw;
  padding-top: 0.5vw;
  border: none;
  
}
.container {
  width: 100%;
  height: auto;
  display: flex;
}

.box {
  box-sizing: border-box;
  color: white;
}
.PieContainer {
  float: left;
}
#Pieunten {
  position: relative;
  background-color: rgb(0, 0, 0, 0.8);
  float: both;
  margin-top: 3vw;
  margin-left: 4vw;

  width: 20vw;
  height: 19vw;
  color: white;
  padding: 2vw;
}
#Pieoben {
  position: relative;
  background-color: rgb(0, 0, 0, 0.8);
  float: both;
  margin-top: 4vw;
  margin-left: 4vw;

  width: 20vw;
  height: 19vw;
  color: white;
  padding: 2vw;
}

img {
  width: 100vw;
  width: 100vh;
}
#main {
  background-image: url("../assets/sauna-background.jpg");
  background-size: 2560px 1440px;
font-family: TTNormsProNormal;
  
  width: 100vw;
  height: 99vw;
}
.rightbox{
  position: relative;
  margin-right: 30vw ;
  margin-left: 4vw;
  height: 40vw;
}
#Commercial1 {
    background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), #ab6e64);
    position: absolute;
  height: 53vw;
    animation: mainhidden1 30s infinite;
}
#Commercial2 {
   height: 53vw;
   background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), #49877F);
 position: absolute;
  animation: mainhidden2 30s infinite;
}
@keyframes mainhidden1 {
  0% {
    opacity: 0;
  }3% {
    opacity: 0;
  }
  7% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  43% {
    opacity: 1;
  }
  47%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
}

@keyframes mainhidden2 {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  53% {
    opacity: 0;
  }
  57%{
    opacity: 1;
  }
  93%{
    opacity: 1;
  }
  97%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
}
</style>

