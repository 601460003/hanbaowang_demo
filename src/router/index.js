import Vue from 'vue'
import Router from 'vue-router'
import miss from '@/components/miss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'miss',
      component: miss
    }
  ]
})
