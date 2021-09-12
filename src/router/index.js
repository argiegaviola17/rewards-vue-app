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

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
