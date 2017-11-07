import Vue from 'vue'
import Router from 'vue-router'

import About from '@/pages/About'
import Landing from '@/pages/Landing'
import Discover from '@/pages/Discover'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Landing
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/discover/:topic?',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/reader/:book?',
      name: 'Read',
      component: Discover
    },
    {
      path: '/listener/:podcast?',
      name: 'Listen',
      component: Discover
    },
    {
      path: '/viewer/:video?',
      name: 'View',
      component: Discover
    },
  ]
})
