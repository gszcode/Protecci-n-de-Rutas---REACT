import { useSelector } from 'react-redux'
import { AppStore } from '../redux/store'
import { Roles } from '../models/roles'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes } from '../models/routes'

interface Props {
  role: Roles
}

function RoleGuard({ role }: Props) {
  const userState = useSelector((store: AppStore) => store.user)

  return userState.role === role ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />
}
export default RoleGuard
