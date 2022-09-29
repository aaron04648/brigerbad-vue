<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Pie } from 'vue-chartjs'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../service/db'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    },

  },
  data() {
    return {
    Chartdata1:Number,
    Chartdata2:Number,
    Chartdata3:Number
     
    }
  },mounted(){
    onSnapshot(collection(db, "Clock"), (querySnapshot) => {
const data2 = []
  querySnapshot.forEach((doc) => {
  const data={
  id:doc.id,
  Chartdata1:doc.data().Chartdata1,
  Chartdata2:doc.data().Chartdata2,
  Chartdata3:doc.data().Chartdata3,
}
data2.push(data) 
  });



});
 window.setInterval(() => {
            var time = new Date ()
            var seconds = time.getSeconds()     
            this.Chartdata1 = seconds
            this.Chartdata3 = 60 - this.Chartdata1
            },1000);
  },computed:{
    
    chartData() {
        return{
          datasets: [
          {
           animation:"none",
            backgroundColor: [ 'transparent', '#3E3D3D' ],
            borderColor:"transparent",
            data: [this.Chartdata1,this.Chartdata3]
          }
        ]
        } 
      }, chartOptions() {return{
        
        responsive: true,
        maintainAspectRatio: true
      }
        
      }
  }
}
</script>
