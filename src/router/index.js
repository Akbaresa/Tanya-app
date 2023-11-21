import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/BerandaView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path : '/',
        name: 'beranda',
        component: Beranda,
        meta: {requiresAuth: true}
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/SignUp.vue')
    },
    {
        path: '/login',
        name: 'signin',
        component:() => import('../views/SignIn.vue')
    },
    {
        path: '/article',
        name: 'article',
        component:() => import('../views/Article.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: ()  => import('../views/Profile.vue')
    }
    ]
})

// Middleware untuk mengecek otentikasi sebelum masuk ke rute
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
      next('/login');
    } else {
        
      next();
    }
  });

export default router