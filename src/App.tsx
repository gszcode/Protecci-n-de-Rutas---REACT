import './App.css'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models/routes'
import { Provider } from 'react-redux'
import AuthGuard from './guards/auth.guard'
import store from './redux/store'
import RoutesWithNotFound from './utilities/RoutesNotFound.utility'
import { Suspense, lazy } from 'react'
import RoleGuard from './guards/role.guard'
import { Roles } from './models/roles'
import Dashboard from './pages/Private/Dashboard/Dashboard'

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RoleGuard role={Roles.Admin} />}>
                <Route path={`${PrivateRoutes.DASHBOARD}/*`} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
