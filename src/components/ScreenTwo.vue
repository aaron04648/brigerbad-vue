<template>
<div class="mainmain">

</div>

<div class="Main">
  <div class="cardcontainer">
    <img class="galleryImg" src="../assets/terme-1.jpg">
  </div>
</div>

<table id="div-main">
  <tr>
    <th class="th-1">Eintritt Spa</th>
    <th class="th-2">3h</th>
    <th class="th-3">Tag</th>
  </tr>
  <tr v-for="item in data" :key="item.id">
    <td class="td-1">{{item.type}}</td>
    <td class="td-2">{{item.price_3h}}</td>
    <td class="td-3">{{item.price_24h}}</td>
  </tr>
</table>


<div class="Main2">
  <div class="cardcontainer">
    <img class="galleryImg" src="../assets/spa-1.jpg">
  </div>
</div>
</template>

<script>

import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../service/db'
export default {
  data(){
    return{
      data: undefined
    }
  }, mounted() {
   console.log("mounted")

onSnapshot(collection(db, "Spa"), (querySnapshot) => {
const data2 = []
  querySnapshot.forEach((doc) => {
  const data={
  id:doc.id,
  type:doc.data().type,
  price_3h:doc.data().price_3h,
  price_24h:doc.data().price_24h,
}
data2.push(data) 
  });
  console.log(data2)
 this.data = data2
  console.log()


});
  },
}
</script>

<style scoped>
.mainmain{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.Main{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  margin: 0;
  opacity: 0;
  animation: mainhidden1 30s infinite ;
}

.Main2{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  margin: 0;
  opacity: 0;
  animation: mainhidden2 30s infinite ;
}

th {
  font-weight: bolder;
  font-family: TTNormsBold;
}

table {
  text-align: left;
  font-size: 5vw;
  padding-left: 30vw;
  padding-top: 1vw;
  color: #000;
  padding-bottom:1vw ;
}

#div-main {
  position: fixed;
  color: white;
  padding: 2vw;
  margin-top:25vw ;
  margin-left: 3.6458333333333335vw;
  font-size: 4.2vw;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.8);
}
.th-1 {
  padding-left: 2.5vw;
  padding-bottom:1vw ;
}
.th-2 {
  padding-left: 21.5vw;
  padding-right:2.5vw ;
}

.th-3 {
  padding-left: 5.5vw;
  padding-right:2.5vw ;
}

.td-1 {
   padding-left: 2.5vw;
   padding-bottom:1vw ;
}

.td-2 {
  padding-left: 21.5vw;
  padding-right:2.5vw ;
}

.td-3 {
  padding-left: 5vw;
  padding-right:2.5vw ;

}
@keyframes zoominoutsinglefeatured {
  0% {
      height: 100vh;
      transform: scale(1,1);
  }
  100% {
      height: 100vh;
      transform: scale(1.2,1.2);
  }
}

@keyframes mainhidden1 {
  0% {
      opacity: 0;
  }
  7.5% {
      opacity: 1;
  }
  10% {
      opacity: 1;
  }
  49% {
      opacity: 1;
  }
  50%{
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
  50% {
      opacity: 0;
  }
  51%{
      opacity: 1;
  }
  92.5%{
      opacity: 1;
  }
  100%{
      opacity: 0;
  }
}

.cardcontainer img {
    position: fixed;
    left: -100vw;
    float: left;
    z-index: -1;
    animation: zoominoutsinglefeatured infinite ;
    animation-duration: 15s;
    animation-timing-function: linear;
}
</style>