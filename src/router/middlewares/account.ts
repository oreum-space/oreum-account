import { NavigationGuard, RouteRecordName } from 'vue-router'
import useAccount from '@/stores/useAccount.ts'

const unauthorizedRoutes = <RouteRecordName[]>['Login', 'Create', 'PageNotFound']

export default <NavigationGuard>function account (to, from, next) {
  const accountStore = useAccount()
  if (!to.name || (!unauthorizedRoutes.includes(to.name) && !accountStore.account)) {
    return next({ name: 'Login' })
  }
  next()
}