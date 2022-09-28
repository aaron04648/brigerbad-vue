
<template>
  <div id="main">
    <div class="container">
      <table class="content">
        <thead>
          <tr>
            <th style="font-family:TTNormsBold">PROGRAMM</th>
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
              <td id="td-1">
                {{ item.beginTime }}
              </td>
              <td>{{ item.Event }}</td>
            </div>
          </tr>
        </tbody>
      </table>

      <div class="PieContainer">
        <div id="Pieoben">
      <h1 id="PieObenH1">SOMMER STURM</h1> <p id="PieTime1"><span class=Ziffer><span style="font-size:4.5vw;">100</span><br> min</span></p>
      <img src="../assets/zifferblatt.svg" id="Watch" alt="" />
     
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
          <h1 id="PieUntenH1">SOMMER STURM</h1> <p id="PieTime2"> <span class=Ziffer><span style="font-size:4.5vw;">1</span>   <br> min</span></p>
      <img src="../assets/zifferblatt.svg" id="Watch2" alt="" />
     
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
      
      <div class="rightbox" v-for="item in Event" :key="item.id" :class="{slider:true}">
        <img class="CommercialImg" src="../assets/icon-behandlung.svg" alt="">
        <div class="box">
          <h2 id="CommercialTitle">{{ item.Aktion }}</h2>
          <h3 id="Commercialtext">{{ item.d1 }}</h3>
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
      styles: {type: Object,
      default: () => {
     
      }
      },
      WhichID: undefined,
      Event: undefined,
      Programm: undefined,
      Intervalltest: "12 min",
      timenow: "",
      time2: "",
      time3: "",
      Test: 200,
      applyBlueData: false,
      
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

    



    console.log("mounted");
    onSnapshot(collection(db, "Clock"), (querySnapshot) => {
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
    });
    onSnapshot(collection(db, "Clock Events"), (querySnapshot) => {
      const data2 = [];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          Aktion: doc.data().Aktion,
          Event: doc.data().Event,
          d1: doc.data().d1,
          d2: doc.data().d2,
        };
        data2.push(data);
      });
      console.log(data2);
      this.Event = data2;
      console.log();
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
      console.log(data2);
      this.Programm = data2;
      console.log();
    });

 setInterval(()=>{
      var index= new Date()
      var index2 = index.getSeconds()
    if(this.Event.length == parseInt(index2)){
       console.log("funktioniwer")
    }
    else{
      console.log("nein")
    }
   
      console.log(index2)
      console.log(this.Event.length)
    },1500)
 },
  computed() {},
};
</script>

<style scoped>
.Ziffer{
  margin-top:1.4vw ;
  padding-bottom:1vw ;
  z-index: 1;
vertical-align: middle;
font-size: 3vw;
}
#Commercialtext{
  font-size:1.8vw ;
  margin: 2vw;
  margin-right: 5vw;
}
#CommercialTitle{
  font-family:TTNormsBold;
  font-size: 2.5vw;
  margin: 2vw;
  margin-right: 7vw;
}
.CommercialImg{
  width: 14vw;
  height: auto;
  margin: 2vw;
  margin-top: 6vw;
  margin-left:6vw;
}
.rightbox{
  
    background-image: linear-gradient(to bottom, rgba(255,0,0,0), #ab6e64);

  margin-left:4vw ;
  margin-right:4vw ;
}
#PieTime2{
vertical-align: middle;
  font-family:TTNormsBold;
text-align: center;
  font-size: 3vw;
  z-index: 1;

  width: 100%;
  display: flex;
  justify-content: center;
}
#PieUntenH1{
  font-family:TTNormsBold;
text-align: center;
font-size: 1.8vw;
margin: 0;

}
#pie2 {
margin-top: -13.2vw;
margin-left: 4.9vw;
  width: 10.5vw;
  height: auto;
z-index:-2;
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
#PieTime1{
vertical-align: middle;
  font-family:TTNormsBold;
text-align: center;
  font-size: 3vw;
  z-index: 1;

  width: 100%;
  display: flex;
  justify-content: center;
}
#PieObenH1{
  font-family:TTNormsBold;
text-align: center;
font-size: 1.8vw;
margin: 0;

}
#pie1 {
margin-top: -13.2vw;
margin-left: 4.9vw;
  width: 10.5vw;
  height: auto;
z-index:-2;
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

  padding-bottom: 4vw;
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
  padding-right: 1vw;
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


  font-family: TTNormsregular;
  width: 100vw;
  height: 99vw;
}
</style>

