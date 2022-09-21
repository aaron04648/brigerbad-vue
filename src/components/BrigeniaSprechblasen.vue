<template id="Sprechblase" >
  <h1 id="title">Brigenia-Talk</h1>
  <img id="animation" src="../assets/Projekt_Brigerbad.jpg" alt="" />
  <div v-for="item in data" :key="item.id">
    
 
   <div id="sprechblase1">{{item.Description}} 🦆
   </div>

   <div id="sprechblase2">
    {{item.WetterText}} <span id="wetter">{{this.AnzeigeWetter}}</span></div>


   </div>
   

</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../service/db'

export default {
  data() {
    return {
      data: undefined,

      Zustand: "",
      AnzeigeWetter: "☀️",
    };
  },  
  mounted(){


onSnapshot(collection(db, "Sprechblase"), (querySnapshot) => {
const data2 = []
  querySnapshot.forEach((doc) => {
  const data={
  id:doc.id,
  Description:doc.data().Description,
  WetterText:doc.data().WetterText,
  wetter:doc.data().wetter,
}
data2.push(data) 
  });

 this.data = data2


  this.data.forEach((element) => {
   
        let test = String(element.wetter);
        if (test == "sonne") {
          this.AnzeigeWetter = "☀️";
          element.WetterText = "Das Wetter morgen wird wieder Toll - es scheint die Sonne";
        } else if (test == "regen") {
          element.WetterText = "Das Wetter morgen wird nicht so Toll - es regnet";
          this.AnzeigeWetter = "🌧";
        } else if (test == "bewölkt") {
          element.WetterText = "Das Wetter morgen wird solala Toll - es ist bewölkt";
          this.AnzeigeWetter = "🌤";
        }
      });
});

this.Zustandwetter()
  },
methods: {
    Zustandwetter: function () {

    
    },
  },
};
</script>
<style scoped>
#wetter{
  margin-left: 15vw;
}
#title{
  margin: 0;
}
#animation{

  margin-top: 10vw;
  float: left;
  width: 45vw;
  height: auto;
}
#sprechblase1 {
  line-height: 3vw;
  width:35vw;
    word-wrap:break-word;
margin-left: 50vw;
font-size: 2vw;
position: absolute;
padding-top: 1vw;
padding-bottom:4vw;
padding-left:1vw;
padding-right:4vw;
border: 4px solid #2651A6;
margin-right:100vw;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 1vw;
background: #fff;
 -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 0.5s forwards;
    animation-delay: 2s;
}

@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}


#sprechblase1:before {
content: ' ';
position: absolute;
width: 0;
height: 0;
left: 30px;
top: 100%;
border: 20px solid;
border-color: #2651A6 transparent transparent #2651A6;}

#sprechblase1:after {
content: ' ';
position: absolute;
width: 0;
height: 0;
left: 34px;
top: 100%;
border: 15px solid;
border-color: #ffffff transparent transparent #ffffff;}
#sprechblase2 {
  line-height: 3vw;
  width:35vw;
    word-wrap:break-word;
margin-top: 20vw;
margin-left: 55vw;
font-size: 2vw;
position: absolute;
padding-top: 1vw;
padding-bottom:4vw;
padding-left:1vw;
padding-right:4vw;
border: 4px solid #2651A6;
margin-right:100vw;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 1vw;
background: #fff;}

#sprechblase2:before {
content: ' ';
position: absolute;
width: 0;
height: 0;
left: 30px;
top: 100%;
border: 20px solid;
border-color: #2651A6 transparent transparent #2651A6;}

#sprechblase2:after {
content: ' ';
position: absolute;
width: 0;
height: 0;
left: 34px;
top: 100%;
border: 15px solid;
border-color: #ffffff transparent transparent #ffffff;}
</style>
