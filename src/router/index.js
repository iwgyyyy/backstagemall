import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path:'/login',
    component:()=>import('../views/Login')
  },
  {
    path:'/main',
    component:()=>import('../views/Main')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
