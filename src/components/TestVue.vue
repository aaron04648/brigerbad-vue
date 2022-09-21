
<template>
  <div>
    <div class="header">
      <div class="headertext">
        <h1>Sauna & Dampfbad</h1>
      </div>
      <div id="aktuell" class="headertext">
        <h1>Aktuell</h1>
      </div>
    </div>
    <div class="container">
      <div class="box">

        <table class="content">
          <thead>
            <tr>
              <th>
                Nächste Aufgüsse
                <hr style="padding: 0; margin: 3%" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, k) in Programm"
              v-on:update="Clock(item,k)"
              :key="item.id"
              :class="{ applyBlue: Timeleft(item, k) }"
              
            >
              <td id="td-1">
                {{ item.beginTime }}
              </td>
              <td id="td-2">{{ item.Event }}</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div class="box">
        <div class="smalbox">
          <h2 id="title1" alt="">{{ this.Intervalltest}} minuten</h2>
          <h3 id="Time1"></h3>
          <Piechart :Chartdata1="Chartdata1" :Chartdata2="Chartdata2"/>
          
        </div>
        <div class="smalbox">
          <h2 id="title2">{{this.Chartdata3}} minuten</h2>
          <h3 id="Time2"></h3>
           <Piechartunten :Chartdata1="Chartdata1" :Chartdata3="Chartdata3">
           </Piechartunten>
        </div>
      </div>

  <div class="rightbox" v-for="item in Event" :key="item.id">
        <div class="box">
          <h2>{{ item.Aktion }}</h2>
          <h3>{{ item.d1 }}</h3>
        </div>
        <div class="box">
          <h2>{{ item.Event }}</h2>
          <h3>{{ item.d2 }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import Piechart from "./ChildPie.vue";
import Piechartunten from "./PieUnten.vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../service/db";
export default {
 
components:{
Piechart,
Piechartunten
},
  data() {
    return {
      WhichID: undefined,
      Event: undefined,
      Programm: undefined,
      Intervalltest: "Loading..",
      timenow: "",
      time2: "",
      time3: "",
      Test: 200,
      applyBlueData:false,
      Chartdata1: undefined,
      Chartdata2: undefined,
      Chartdata3: undefined,
      item:undefined,
      k:undefined
    };
  },watch:{
  },
  methods: {
   Timeleft:function(item, k) {
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
        time4.setHours(this.Programm[k+2].hour)
        time4.setMinutes(this.Programm[k+2].min)
        time4.setSeconds(0)
        time3.setHours(this.Programm[k + 1].hour);
        time3.setMinutes(this.Programm[k + 1].min);
        time3.setSeconds(0);
        this.time3 = time3;
        this.time2 = time2;
        this.timenow = timeNow;
        if(time2 < timeNow && timeNow < time3){
          var h1 = (timeNow.getHours()-time2.getHours())*60
          var min1 = timeNow.getMinutes()-time2.getMinutes()
          var tot1 = h1+min1
          var h2 = (time3.getHours()-timeNow.getHours())*60
          var min2 = (time3.getMinutes()-timeNow.getMinutes())
          var tot2 = h2+min2
          var h3 = (time4.getHours()-timeNow.getHours())*60
          var min3 = (time4.getMinutes()-timeNow.getMinutes())
          var tot3 = h3+min3
          this.Chartdata1 =tot1
          this.Chartdata2 = tot2
          this.Chartdata3 = tot3
          this.Intervalltest = this.Chartdata2
          
          setInterval(function () {
            var time = new Date()
            var Increment = time.getSeconds()
            
            var test  = parseInt(Increment)
          
            test = test +1
              console.log(test)
            if(test===1){
              test=0
            window.location.reload()
          }}, 1000);
          
        }
        //setInterval(function () {}, );
        return time2 < timeNow && timeNow < time3;
    },
   
   
    
    
  },mounted() {
   console.log("mounted")

onSnapshot(collection(db, "Clock Events"), (querySnapshot) => {
const data2 = []
  querySnapshot.forEach((doc) => {
  const data={
  id:doc.id,
  Aktion:doc.data().Aktion,
  Event:doc.data().Event,
  d1:doc.data().d1,
  d2:doc.data().d2,
}
data2.push(data) 
  });
  console.log(data2)
 this.Event = data2
  console.log()


});
onSnapshot(collection(db, "ClockProgramm"), (querySnapshot) => {
const data2 = []
  querySnapshot.forEach((doc) => {
  const data={
  id:doc.id,
  Event:doc.data().Event,
  beginTime:doc.data().beginTime,
  hour:doc.data().hour,
  min:doc.data().min,
}
data2.push(data) 
  });
  console.log(data2)
 this.Programm = data2
  console.log()


});
  },
  computed() {
  
  }

};
</script>

<style scoped>
.applyBlue {
  color: blue;
}
h1 {
  color: black;
  font-size: 7vh;
}
h2 {
  font-size: 5vh;
}
.chart {
  width: 50%;
  height: 20vh;
  border: solid;
  justify-self: center;
}
body {
  background-color: black;
  color: black;
  font-family: PT Sans Narrow;
  padding-left: 3%;
}
table.content {
  color: black;
  border-collapse: collapse;
  padding-left: 3%;
  width: 30vw;
  max-width: 33.3vw;
}
table.content thead tr {
  font-family: PT Sans Narrow;
  color: black;
  padding-left: 3%;
  font-size: 6vh;
}
table.content tbody td {
  float: left;
  display: block;
  font-size: 4vh;
  line-height: 150%;
  margin-left: 10px;
}
.container {
  width: 100%;
  height: auto;
  display: flex;
  align-items: baseline;
}
canvas {
  margin-left: 28%;
}
.box {
  width: 33.3vw;
  margin: 20px;
  box-sizing: border-box;
  color: black;
}
.smalbox {
  align-self: center;
  padding: 30px;
  text-align: center;
  justify-items: center;
  width: 10vw;
  height: auto;
  border: none;
}
.header {
  width: 100%;
  height: auto;
  display: flex;
  align-items: baseline;
}
.headertext {
  width: 34vw;
  margin: 10px;
  box-sizing: border-box;
}
#aktuell {
  margin-right: 13vw;
  text-align: right;
}
.chart {
  width: 1vw;
  height: auto;
  border: none;
}
#td1 {
  float: left;
}
</style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
