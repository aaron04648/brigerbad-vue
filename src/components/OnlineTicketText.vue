<template>
<div>
  <h1 id =Onlinetickettext v-for="item in data" :key="item.id">
    {{item.text}}
  </h1>
  <img class="logos" id="Playstore" src="../assets/Playstore.png" alt="">
  <img class="logos" id="apple" src="../assets/Apple.png" alt="">
</div>
 
  
</template>

<script>
import jsonData from './/Online-ticket.json'
export default {
data(){
        return{
            data: jsonData
        }
    }
}
</script>

<style>
#Onlinetickettext{
  font-size: 8vw;
  color: #000;
  
}
.logos{
  position: relative;
  width: 8vw;
  height: auto;
  
}
  #apple{
 margin-top: 20vw;
 margin-left: 3vw;
  }
  #Playstore{
    margin-top:20vw ;
    margin-left: 60vw;
  }
</style>