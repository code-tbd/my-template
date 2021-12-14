import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    name: 'homepage',
    path: '/homepage',
    component: () => import('@/views/Homepage/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
