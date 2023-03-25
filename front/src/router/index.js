import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'show',
    component: () =>import("../views/Show"),
  },

  {
    path: '/login',
    name: 'login',
    component: () =>import('../views/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>import('../views/Register')
  },
  {
    path: '/theLayout',
    name: 'theLayout',
    component: () =>import('@/layout/Layout'),
    children:[
      {
        path:'AI-draw',
        name:'AI-draw',
        component: () => import("@/views/AIdraw"),
      },
      {
        path:'theGpt',
        name:'theGpt',
        component: () => import("@/views/Gpt"),
      }
    ]
  },



]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
