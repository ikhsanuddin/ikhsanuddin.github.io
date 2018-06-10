import Vue from 'vue'
import Router from 'vue-router'
const LandingPage = () => import('@/pages/landing');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }
  ],
  mode: 'history'
})
