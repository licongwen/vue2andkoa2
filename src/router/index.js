import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import PageNotFound from'@/components/NotFoundPage'

Vue.use(Router)

 const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/helloworld',
      name:'HelloWorld',
      component:HelloWorld,
      meta:{
        requireAuth:true
      }
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
//路由守卫 未登陆时自动自动跳转到登陆页面
router.beforeEach((to,from,next)=>{
    const token = localStorage.getItem('token');
      if(to.meta.requireAuth){
        if(token){
          next()
        }else{
          next({
          path:'/login',
        })
      }
    }else{
      next()
  }
})
export default router;
