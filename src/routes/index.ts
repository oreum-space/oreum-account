import { RouteRecordRaw } from 'vue-router'

const routes: readonly RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/VAccount.vue')
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/VLogin.vue')
  },
  {
    name: 'Create',
    path: '/create',
    component: () => import('@/views/VCreate.vue')
  },
  {
    name: 'Activate',
    path: `/activate/:code`,
    component: () => import('@/views/VActivate.vue')
  },
  {
    name: 'PageNotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/VPageNotFound.vue'),
    meta: {
      title: `404 | ${ import.meta.env.VITE_DEFAULT_TITLE }`
    }
  }
]

export default routes