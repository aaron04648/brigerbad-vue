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
    Chartdata1:Number,
    Chartdata2:Number,
    Chartdata3:Number
  },
  data() {
    return {
      
     
    }
  },computed:{
    chartData() {
        return{
          datasets: [
          {
            animation:0,
            backgroundColor: [ '#00D8FF', '#DD1B16'],
            data: [this.Chartdata1,this.Chartdata2]
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
