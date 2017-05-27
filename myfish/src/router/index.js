import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import tPush from '@/components/Push'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav
    },
    {
          path:'/push',
          name:'push',
          component:tPush
    }
  ]
})
