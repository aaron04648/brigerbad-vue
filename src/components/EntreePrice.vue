<template>
   <table id="div-main">
  <tr>
    <th >Therme</th>
    <th class=th-2>3h</th>
    <th class="th-3">Tag</th>
  </tr>
  <tr v-for="item in data" :key="item.id">
    <td class="td-1">{{item.type}}</td>
    <td class="td-2">{{item.price_3h}}</td>
    <td class="td-3">{{item.price_day}}</td>
  </tr>
  
</table>
</template>

<script>
import jsonData from './/jsonData.json'
export default {
data(){
        return{
            data: jsonData
        }
    }
}
</script>

<style>

html{
    background-color: rgb(255, 240, 156);
     font-family: Arial, Helvetica, sans-serif;
     color: #000;
}

th{
    font-weight: bold;
}

table{
    text-align: left;
    font-size: 5vw;
    padding-left: 2vw;
    padding-top: 1vw;
    color: #000;
   
}

#div-main{
    max-width: 100%;
    max-height: 100%;
}

.th-2{
    padding-left: 8vw;
}

.th-3{
    padding-left: 8vw;
}

.td-1{
    padding-left: 0vw;
}

.td-2{
    padding-left: 8vw;
}

.td-3{
    padding-left: 8vw;
}
</style>