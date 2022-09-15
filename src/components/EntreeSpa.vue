<template>
<div  :style="{
    
   
      'position':'absolut',
      'width':'100vw',
      'height':'100vh',
      'top':'0',
      'left':'0',
      'bottom':'0',
      'right':'0',
      'overflow':'hidden',
      'scroll':'no',


      'margin':'0'    }">
      <div class="cardcontainer">
            <img class="galleryImg" src="../assets/terme-1.jpg">
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
    <td class="td-3">{{item.price_day}}</td>
  </tr>
  
</table>
</div>
   
</template>

<script>
import jsonData from './/jsonDataSpa.json'
export default {
data(){
        return{
            data: jsonData
        }
    }
}
</script>

<style scoped>

th {
  font-weight: bold;
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
  color: white;
  padding: 2vw;
  margin-top:25vw ;
  margin-left: 3.6458333333333335vw;
  font-size: 4.2vw;
  background-color: rgb(0, 0, 0, 0.8);
}
.th-1 {
  padding-left: 2.5vw;
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
            .cardcontainer img {
                position: fixed;
                left: -100vw;
                float: left;
                z-index: -1;
                animation: zoominoutsinglefeatured 8s infinite ;
            }
</style>