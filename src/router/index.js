import { createRouter, createWebHistory } from 'vue-router'
import Entree from '../components/EntreePrice.vue'
import EntreeSpa from   '../components/EntreeSpa.vue'
import OnlineTicketText from   '../components/OnlineTicketText.vue'
import AngeboteWerbung from   '../components/AngeboteWerbung.vue'
import BrigeniaBubble from   '../components/BrigeniaSprechblasen.vue'
import BrigeniaVideo from   '../components/BrigeniaVideo.vue'
import editor from   '../components/VueEditor.vue'
import clock from '../components/BrigerbadClock.vue'
import test from '../components/TestVue.vue'




const routes = [
  {
    path: '/EntreeTherme',
    name: 'EntreePrice',
    component: Entree
  },
  {
    path: '/entreeSpa',
    name: 'EntreeSpa',
    component: EntreeSpa
  },
  {
    path: '/Online-Ticket',
    name: 'OnlineTicket',
    component: OnlineTicketText
  },
  {
    path: '/AngeboteWerbung',
    name: 'AngeboteWerbung',
    component: AngeboteWerbung
  },
  {
    path: '/BrigeniaBubble',
    name: 'BrigeniaBubble',
    component: BrigeniaBubble
  },
  {
    path: '/BrigeniaVideo',
    name: 'BrigeniaVideo',
    component: BrigeniaVideo
  },
  {
    path: '/editor',
    name: 'editor',
    component: editor
  },
  {
    path: '/clock',
    name: 'clock',
    component: clock
  },
  {
    path: '/test',
    name: 'test',
    component: test  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router