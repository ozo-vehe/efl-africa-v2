import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import ServicesView from '@/views/ServicesView.vue'
import GalleryView from '@/views/GalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
  ],
})

export default router
