import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'
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
        path:'',
        redirect: '/main/orderwaitpaid'
      },
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
      },
      {
        path:'showpets',
        component:()=>import('../components/ShowGoods/ShowPets')
      },
      {
        path:'showpetsgoods',
        component:()=>import('../components/ShowGoods/ShowPetsGoods')
      },
      {
        path:'showsouvenir',
        component:()=>import('../components/ShowGoods/ShowSouvenir')
      },
      {
        path:'changepassword',
        component:()=>import('../components/Login/ChangePassword')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  if(to.fullPath.startsWith('/main')&&store.state.account===''){
    next('/login')
  }else{
    next()
  }
})

export default router
