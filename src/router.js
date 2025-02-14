import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Appointment from '@/components/appointment'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/app',
      component: Appointment
    }
  ]
})
