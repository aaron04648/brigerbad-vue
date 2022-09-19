<template>
   
<div class="mainmain">
    <div class="Main1">
        <img class="galleryImg" src="../assets/restaurant.png">
    </div>

    <div id=allinall1 v-for="item in data" :key="item.id">
        <img id="imgRestaurant1" src="../assets/icon-restaurant.svg" alt="">
        <div id="content1">
            <h1 id="titletext1">{{item.title}}</h1>
            <p class="AngeboteWerbung1">{{item.Angebot}}</p>
            <p class="AngeboteWerbung1">{{item.Werbung}}</p>
        </div>
    </div>

    <div class="Main2">
        <img class="galleryImg2" src="../assets/schwimmbad.png">
    </div>

    <div id=allinall2 v-for="item in data" :key="item.id">
        <img id="imgRestaurant2" src="../assets/icon-therme.svg" alt="">
        <div id="content2">
            <h1 id="titletext2">{{item.title}}</h1>
            <p class="AngeboteWerbung2">{{item.Angebot}}</p>
            <p class="AngeboteWerbung2">{{item.Werbung}}</p>
        </div>
    </div>

    <div id="layout3">
        <div class="Main3">
            <img class="galleryImg3" src="../assets/spa.png">
        </div>

        <div id=allinall3 v-for="item in data" :key="item.id">
            <img id="imgRestaurant3" src="../assets/icon-spa.svg" alt="">
            <div id="content3">
                <h1 id="titletext3">{{item.title}}</h1>
                <p class="AngeboteWerbung3">{{item.Angebot}}</p>
                <p class="AngeboteWerbung3">{{item.Werbung}}</p>
            </div>
        </div>
    </div>
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

.mainmain{
    background-color: black;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

#allinall1 {
  position: fixed;
  height: 48.51851851851852vh;
  width: 92.70833333333334vw;
  color: white;
  padding: 2vw;
  margin-top:23.16666666666667vw ;
  margin-left: 1.6458333333333335vw;
  font-size: 4.2vw;
  z-index: 1;
  opacity: 1;
  background-color: rgb(73, 135, 127, 0.7);
  animation: contentslider1 30s infinite ;
}

#content1{
    float: left;
    margin-top: 5vh;
    height: 40vh;
    width: 55vw;
    
}

#imgRestaurant1{
    width: 25.666666666666664vw;
    height: auto;
    margin-top: 1vh;
    margin-left: 4vw;
    float: left;
    padding-right: 6vw;
}

#titletext1{
    font-size: 3vw;
    margin: 0;
}
.AngeboteWerbung1{
    font-size: 3vw;
    margin: 0;
}

.Main1{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  margin: 0;
  z-index: 0;
  opacity: 0;
  animation: layouthidden1 30s infinite ;
}

#allinall2 {
  position: fixed;
  height: 48.51851851851852vh;
  width: 92.70833333333334vw;
  color: white;
  padding: 2vw;
  margin-top:23.16666666666667vw ;
  margin-left: 1.6458333333333335vw;
  font-size: 4.2vw;
  z-index: 1;
  opacity: 1;
  background-color: rgb(83, 127, 163, 0.7);
  animation: contentslider2 30s infinite ;
}

#content2{
    float: left;
    margin-top: 5vh;
    height: 40vh;
    width: 55vw;
}

#imgRestaurant2{
    width: 25.666666666666664vw;
    height: auto;
    margin-top: 1vh;
    margin-left: 4vw;
    float: left;
    padding-right: 6vw;
}

#titletext2{
    font-size: 3vw;
    margin: 0;
}
.AngeboteWerbung2{
    font-size: 3vw;
    margin: 0;
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
  z-index: 0;
  opacity: 0;
  animation: layouthidden2 30s infinite ;
}

#allinall3 {
  position: fixed;
  height: 48.51851851851852vh;
  width: 92.70833333333334vw;
  color: white;
  padding: 2vw;
  margin-top:23.16666666666667vw ;
  margin-left: 1.6458333333333335vw;
  font-size: 4.2vw;
  z-index: 1;
  opacity: 1;
  background-color: rgb(171, 110, 100, 0.7);
  animation: contentslider3 30s infinite ;
}

#content3{
    float: left;
    margin-top: 5vh;
    height: 40vh;
    width: 55vw;
}

#imgRestaurant3{
    width: 21.666666666666664vw;
    height: auto;
    margin-top: 5vh;
    margin-left: 6vw;
    float: left;
    padding-right: 8vw;
}

#titletext3{
    font-size: 3vw;
    margin: 0;
}
.AngeboteWerbung3{
    font-size: 3vw;
    margin: 0;
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
  z-index: 0;
  opacity: 0;
  animation: layouthidden3 30s infinite ;
}

@keyframes layouthidden1 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  28% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes contentslider1 {
  0% {
    top: 100vh;
  }
  5% {
    top: 0vh;
  }
  28% {
    top: 0vh;
  }
  33% {
    top: 100vh;
  }
  95% {
    top: 100vh;
  }
  100% {
    top: 100vh;
  }
}

@keyframes layouthidden2 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
  }
  28% {
    opacity: 0;
  }
  33% {
    opacity: 0;
  }
  38% {
    opacity: 1;
  }
  61% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes contentslider2 {
    0% {
    top: 100vh;
  }
  5% {
    top: 100vh;
  }
  28% {
    top: 100vh;
  }
  33% {
    top: 100vh;
  }
  38% {
    top: 0vh;
  }
  61% {
    top: 0vh;
  }
  66% {
    top: 100vh;
  }
  95% {
    top: 100vh;
  }
  100% {
    top: 100vh;
  }
}

@keyframes layouthidden3 {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
  }
  28% {
    opacity: 0;
  }
  33% {
    opacity: 0;
  }
  61% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  71% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes contentslider3 {
  0% {
    top: 100vh;
  }
  5% {
    top: 100vh;
  }
  28% {
    top: 100vh;
  }
  33% {
    top: 100vh;
  }
  61% {
    top: 100vh;
  }
  66% {
    top: 100vh;
  }
  71% {
    top: 0vh;
  }
  95% {
    top: 0vh;
  }
  100% {
    top: 100vh;
  }
}

</style>