import Vue from 'vue'
import Router from 'vue-router'
import Pets from '@/components/Pets'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/pets',
      name: 'PetsIndex',
      component: Pets
    }
  ]
})
