<template>
   <table>
  <tr>
    <th>SPA</th>
    <th class="th-2">3h</th>
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
import jsonData from './/jsonDataSpa.json'
export default {
data(){
        return{
            data: jsonData
        }
    }
}
</script>

<style>

</style>