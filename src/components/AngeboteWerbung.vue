<template>
   
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

</style>