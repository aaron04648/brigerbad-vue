<template>
   
<div class="mainmain">

</div>

<div class="Main">
    <img class="galleryImg" src="../assets/restaurant.png">
</div>

<div class="Main2">
    <img class="galleryImg2" src="../assets/schwimmbad.png">
</div>

<div class="Main3">
    <img class="galleryImg3" src="../assets/spa.png">
</div>

<div id=allinall v-for="item in data" :key="item.id">
    <h1 id="titletext">{{item.title}}</h1>
    <p class="AngeboteWerbung">{{item.Angebot}}</p>
    <p class="AngeboteWerbung">{{item.Werbung}}</p>
</div>

</template>

<script>
import jsonData from './/AngeboteWerbung.json'
export default {
data(){
        return{
            data: jsonData
        }
    }
}
</script>

<style>

#titletext{
    padding-left: 2vw;
    padding-top: 1vw;
    font-size: 5vw;
    color: #000;
}
.AngeboteWerbung{
    padding-left: 2vw;
    font-size: 5vw;
    margin: 0;
    color: #000;
   
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
  opacity: 1;
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
}

.Main3{
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
}

</style>