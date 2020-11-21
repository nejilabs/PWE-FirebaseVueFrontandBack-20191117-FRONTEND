import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secret from '../views/Secret.vue'

import * as firebase from 'firebase'; //1643
import 'firebase/auth'; //1643

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //START 916
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/secret',
    name: 'Secret',
    component: Secret,
    meta:{requiresAuth:true}//3211 add meta tag for router guard
  },
  //END 916
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const requiresAuth = to.matched.some(record=>record.meta.requiresAuth);
  const isAuthenticated = firebase.default.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next('/login');
  }else{
    next();
  }

})

export default router
