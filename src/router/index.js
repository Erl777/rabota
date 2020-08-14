import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import resume from "../views/resume";
import vacancy from "../views/vacancy";
import singleResume from "../views/singleResume";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
    {
    path: '/resume',
    name: 'resume',
    component: resume
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    component: vacancy
  },
  {
    path: '/resume/view/:id',
    name: 'singleResume',
    component: singleResume
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
