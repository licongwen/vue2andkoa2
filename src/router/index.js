import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
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
      component:Home
    }
    ,
    {
      path:'/register',
      name:'Register',
      component:Register
    }
  ]
})
