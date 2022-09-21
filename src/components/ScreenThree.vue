<template>
<div class="mainmain">

</div>

<div class="Main">
    <div class="cardcontainer">
        <img class="galleryImg" src="../assets/terme-1.jpg">
    </div>
</div>
       
<div class="div-main" v-for="item in data" :key="item.id">
    <div id=text>
           <p id="title"> {{item.Title}}</p>
    <p id="description"> {{item.description}}</p>
    </div>
 
    <div class="arrows">
        <img class="galleryImg1" src="../assets/pfeile.svg">
        <img class="galleryImg2" src="../assets/pfeile.svg">
        <img class="galleryImg3" src="../assets/pfeile.svg">
    </div>
</div>

<div class="Main2">
    <div class="cardcontainer">
        <img class="galleryImg" src="../assets/spa-1.jpg">
    </div>
</div>
  
</template>

<script >
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../service/db'
export default {
data(){
        return{
            data:undefined
        }
    }, mounted() {
   console.log("mounted")

onSnapshot(collection(db, "Online-ticket"), (querySnapshot) => {
const data2 = []
  querySnapshot.forEach((doc) => {
  const data={
  id:doc.id,
  Title:doc.data().title,
  description:doc.data().description
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
#description{
    margin: 0;
}
#text{
    float: left;
    padding: 0;
}
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

  overflow: hidden;
  margin: 0;
  opacity: 0;
  animation: mainhidden1 30s infinite ;
}

.Main2{
  position: fixed;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  margin: 0;
  opacity: 0;
  animation: mainhidden2 30s infinite ;
}

.div-main {
    padding: 3vw;
    padding-left: 8vw;
    padding-bottom: 0vw;
    width: 80vw;
    height: 24vw;
    position: fixed;
    margin-top:25vw ;
    margin-left: 3.6458333333333335vw;
    margin-right: 3.6458333333333335vw ;
    font-size: 4.2vw;
    z-index: 1;
    color: white;
    background-color: rgb(0, 0, 0, 0.8);
}
.logos{
  position: relative;
  width: 8vw;
  height: auto;
  
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
    left: -200vw;
    float: left;
    z-index: -1;
    animation: zoominoutsinglefeatured infinite ;
    animation-duration: 15s;
    animation-timing-function: linear;
}
@keyframes zoomin1 {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    75% {
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
@keyframes zoomin2 {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    75% {
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
@keyframes zoomin3 {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    75% {
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
.galleryImg1{
    width: 13vw;
 margin-top: 4vw;
    position: fixed;
    
    
    animation: zoomin1 2s infinite ;
}
.galleryImg2{
     margin-top: 8vw;
    width: 13vw;
    position: fixed;
    
    
    animation: zoomin2 2s infinite ;
}
.galleryImg3{
   margin-top: 12vw;
    width: 13vw;
   
    position: fixed;
    
    
    animation: zoomin3 2s infinite ;
}
.arrows{
    
    margin-left:65vw ;

}
#title{
    margin-top: 0;
    margin: 0;
    margin-bottom: 0;
      font-weight: bolder;
  font-family: TTNormsBold;
}

</style>