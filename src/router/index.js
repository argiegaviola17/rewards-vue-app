import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/:id',
    name: 'item',
    component: () => import( '../views/Item.vue')
  },
  
  { path: "/:pathMatch(.*)*",  component: () => import( '../views/PageNotFound.vue') },

  { path: '/register',  
    name: 'register',
    component: () => import( '../views/Register.vue') 
  },
  
  { path: '/login',  
    name: 'login',
    component: () => import( '../views/Login.vue') 
  },

  { path: '/forgot',  
    name: 'forgot',
    component: () => import( '../views/Forgot.vue') 
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
