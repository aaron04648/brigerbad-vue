import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import JsonEditorVue from 'json-editor-vue3'
import "chart.js"
import "hchs-vue-charts"
import fullscreen from 'vue-fullscreen'
 
import VueSocketIO from 'vue-socket.io'

createApp(App).use(router,window.Vuecharts,JsonEditorVue,fullscreen,new VueSocketIO({
    debug: true,
    connection: 'http://metinseylan.com:1992',
    vuex: {

        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    
})).mount('#app')
