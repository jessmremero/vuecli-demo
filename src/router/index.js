import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Single from '@/pages/Single'
import About from '@/pages/About'
import My from '@/pages/My'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home',name: 'Home',component: Home},
    {path: '/login',name: 'Login',component: Login},
    {path: '/single',name: 'Single',component: Single},
    {path: '/about',name: 'About',component: About},
    {path: '/my',name: 'My',component: My},
    {path: '*',redirect : {name:"Login"}}
  ]
})
