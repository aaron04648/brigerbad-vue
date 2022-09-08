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
           <Piechart style="margin=none">
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

      Chartdata1: undefined,
      Chartdata2: undefined,
    };
  },
  methods: {
    Timeleft: function (item, k) {
     
      setInterval(() => {
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
        (time2 < timeNow && timeNow < time3) 
      })
       
        
    },

    Clock: function () {
      var min = 10;
      var min2 = 50;

      setInterval(() => {
        var timenow = new Date();
        var TimeArr = new Date();
        this.Programm.forEach((element) => {
          TimeArr.setHours(element.hour);
          TimeArr.setMinutes(element.min);
        });
        min = min - 1;
        min2 = min2 + 1;
       

        this.Intervalltest = timenow.toLocaleTimeString();

        /*const found = this.Programm.find(
          () =>
            timenow.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }) <
            TimeArr.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
        );*/

        
        //
       

    
 console.log(min);
 console.log(min2);
      
      }, 1000);

    

    },
  },
  mounted() {
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