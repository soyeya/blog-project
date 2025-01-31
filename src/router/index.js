import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login.vue'
import store from '@/stores'
import Detail from '@/components/Detail.vue'

// const requireAuth = (to, from, next) => {
//   const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
//   store.getters.isAuth ? next() : next(loginPath)
// }


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // beforeEnter: requireAuth
    },
    {
      path: '/login',
      name : 'login',
      component : Login
    },
    {
      path: '/detail/:id',
      name : 'detail',
      component : Detail
    }
  ],
})

export default router
