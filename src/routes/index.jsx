import { BrowserRouter } from 'react-router-dom'
import { USER_ROLE } from '../utils/roles'

import { useAuth } from '../hooks/auth'

import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { SaleRoutes } from './sale.routes'
import { CustomerRoutes } from './customer.routes'
export function Routes() {
  const { user } = useAuth()
  function AcessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.SALE:
        return <SaleRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return <BrowserRouter>{user ? <AcessRoute /> : <AuthRoutes />}</BrowserRouter>
}
