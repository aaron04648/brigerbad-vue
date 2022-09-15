import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import JsonEditorVue from 'json-editor-vue3'
import "chart.js"
import "hchs-vue-charts"
import fullscreen from 'vue-fullscreen'

createApp(App).use(router,window.Vuecharts,JsonEditorVue,fullscreen).mount('#app')
