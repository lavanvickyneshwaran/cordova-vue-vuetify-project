import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/404', component: ErrorPage, name: 'ErrorPage' },
    { path: '*', redirect: '/404' },
    // {
    //   path: '/perant',
    //   name: 'perant',
    //   component: perant,
    //   children: [
    //     {
    //       path: 'Children',
    //       name: 'Children',
    //       component: Children
    //     }
    //   ]
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      name: 'Splash',
      component: Splash
    }
  ]
})
