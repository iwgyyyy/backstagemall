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
    component:()=>import('../views/Main'),
    children:[
      {
        path:'orderwaitpaid',
        component:()=>import('../components/Order/OrderWaitPaid')
      },
      {
        path:'orderwaitdeliver',
        component:()=>import('../components/Order/OrderWaitDeliver')
      },
      {
        path:'orderhistory',
        component:()=>import('../components/Order/OrderHistory')
      },
      {
        path:'orderwaitreceive',
        component:()=>import('../components/Order/OrderWaitReceive')
      },
      {
        path:'addgoods',
        component:()=>import('../components/AddGoods/AddGoods')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
