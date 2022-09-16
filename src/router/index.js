import { createRouter, createWebHistory } from 'vue-router'
import ScreenOne from '../components/ScreenOne.vue'
import ScreenTwo from   '../components/ScreenTwo.vue'
import ScreenThree from   '../components/ScreenThree.vue'
import AngeboteWerbung from   '../components/AngeboteWerbung.vue'
import BrigeniaBubble from   '../components/BrigeniaSprechblasen.vue'
import BrigeniaVideo from   '../components/BrigeniaVideo.vue'
import editor from   '../components/VueEditor.vue'
import clock from '../components/BrigerbadClock.vue'
import test from '../components/TestVue.vue'




const routes = [
  {
    path: '/ScreenOne',
    name: 'ScreenOne',
    component: ScreenOne
  },
  {
    path: '/ScreenTwo',
    name: 'ScreenTwo',
    component: ScreenTwo
  },
  {
    path: '/ScreenThree',
    name: 'ScreenThree',
    component: ScreenThree
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