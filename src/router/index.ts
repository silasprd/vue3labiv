import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import AddView from "../views/AddView.vue"
import UpdateView from "../views/UpdateView.vue"

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
      component: AddView
    },
    {
      path: '/atualizar/:id',
      name: 'atualizar',
      component: UpdateView
    }
  ]
})

export default router
