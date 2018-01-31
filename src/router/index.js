import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import PageNotFound from'@/components/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      meta:{
        requireAuth:true
      }
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'*',
      name:'PageNotFound',
      component:PageNotFound
    }
  ]
})
