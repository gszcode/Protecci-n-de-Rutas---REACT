import './App.css'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models/routes'
import { Provider } from 'react-redux'
import AuthGuard from './guards/auth.guard'
import store from './redux/store'
import RoutesWithNotFound from './utilities/RoutesNotFound.utility'
import { Suspense, lazy } from 'react'

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
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App
