import {
  createRouter,
  createWebHistory
} from 'vue-router'
import routes from '@/routes'
import account from '@/router/middlewares/account.ts'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(account)

export default router