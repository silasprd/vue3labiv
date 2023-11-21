import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/adicionar',
      name: 'adicionar',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/atualizar/:id',
      name: 'atualizar',
      component: () => import('../views/UpdateView.vue')
    }
  ]
})

export default router
