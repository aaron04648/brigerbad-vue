Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@aaron04648 
aaron04648
/
brigerbad-vue
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
brigerbad-vue/src/components/BrigerbadClock.vue

aaron04648 Clock
Latest commit b9b2371 in 31 minutes
 History
 0 contributors
271 lines (232 sloc)  5.13 KB

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
              v-on="Clock(item,k)"
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
          <h2 id="title1" alt="">{{ this.Intervalltest }}</h2>
          <h3 id="Time1"></h3>
          <Piechart/>
          
        </div>
        <div class="smalbox">
          <h2 id="title2">Laden...</h2>
          <h3 id="Time2"></h3>
           <Piechart :Chartdata1="Chartdata1" :Chartdata2="Chartdata2" style="margin=none">
           </Piechart>
        </div>
      </div>

      <div class="rightbox" v-for="item in Event" :key="item.id">
        <div class="box">
          <h2>Events</h2>
          <h3>{{ item.Events }}</h3>
        </div>
        <div class="box">
          <h2>Aktionen</h2>
          <h3>{{ item.Aktionen }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clockevent from ".//BrigerbadClockevent.json";
import ClockProgramm from ".//BrigerbadProgramm.json";
import Piechart from "./ChildPie.vue";
export default {
 
components:{
Piechart
},
  data() {
    return {
      WhichID: undefined,
      Event: Clockevent,
      Programm: ClockProgramm,
      Intervalltest: "Loading..",
      timenow: "",
      time2: "",
      time3: "",
      Test: 200,
      applyBlueData:false,
      Chartdata1: undefined,
      Chartdata2: undefined,
      item:undefined,
      k:undefined
    };
  },watch:{

       
       
        
       
    
  },
  methods: {
   Timeleft(item, k) {
    
      this.item = item
       this.k = k
         var timeNow = new Date();
        var time2 = new Date();
        time2.setHours(item.hour);
        time2.setMinutes(item.min);
        time2.setSeconds(0);
        var time3 = new Date();
        if (this.Programm[k + 1] === undefined) {
          return time2 < timeNow;
        }
        if (item === undefined) {
          return time2 < timeNow;
        }
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
           return true, this.Chartdata1 =tot1, this.Chartdata2 =tot2
       
         
        }
    },Clock(item,k){
       console.log(item)
       var timeNow = new Date();
        var time2 = new Date();
       time2.setHours(this.Programm.hour);
        time2.setMinutes(this.Programm.min);
        time2.setSeconds(0);
        var time3 = new Date();
        if (this.Programm[k + 1] === undefined) {
          return time2 < timeNow;
        }
        if (item === undefined) {
          return time2 < timeNow;
        }
        time3.setHours(this.Programm[k + 1].hour);
        time3.setMinutes(this.Programm[k + 1].min);
        time3.setSeconds(0);
        if(time2 < timeNow && timeNow < time3){
          var h1 = (timeNow.getHours()-time2.getHours())*60
          var min1 = timeNow.getMinutes()-time2.getMinutes()
          var tot1 = h1+min1
          var h2 = (time3.getHours()-timeNow.getHours())*60
          var min2 = (time3.getMinutes()-timeNow.getMinutes())
          var tot2 = h2+min2
           return this.Chartdata1 =tot1, this.Chartdata2 =tot2
       
         
        }
        
       
    }
   
    
    
  },
  mounted() {
    console.log(this.k)
    this.Clock();
  },
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
