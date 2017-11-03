import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Discover from '@/components/Discover'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Landing
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
  ]
})
