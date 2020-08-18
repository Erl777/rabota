import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import resume from "../views/resume";
import vacancy from "../views/vacancy";
import singleResume from "../views/singleResume";
import singleVacancy from "../views/singleVacancy";
import citiesVacancies from "../views/citiesVacancies";
import professions from "../views/professions";


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
    path: '/vacancy/view/:id',
    name: 'singleVacancy',
    component: singleVacancy
  },
  {
    path: '/cities',
    name: 'cities',
    component: citiesVacancies
  },
  {
    path: '/professions',
    name: 'professions',
    component: professions
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
