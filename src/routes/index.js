import { createRouter, createWebHistory } from 'vue-router'
// import { useLoad } from '@/composables/auth'
// import { useCleanInputs } from '@/composables/validationForm'

const allowedRoutes = ['/', '/login', '/forgot-password', '/reset-password']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Specify history mode
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    // { path: '/:pathMatch(.*)*', component: () => import('../views/Notfound.vue')},
    { path: '/', component: () => import('../views/Home.vue')},
    { path: '/tecnologias', component: () => import('../views/Tecnologias.vue')},
    { path: '/experiencia', component: () => import('../views/MinhaExperiencia.vue')},
    { path: '/contato', component: () => import('../views/Contato.vue')},
   
  ]
})

export default router