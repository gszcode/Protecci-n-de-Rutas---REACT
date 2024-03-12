import { useNavigate } from 'react-router-dom'
import { UserKey, resetUser } from '../../redux/states/user'
import { clearLocalStorage } from '../../utilities/localStorage.utility'
import { PublicRoutes } from '../../models/routes'
import { useDispatch } from 'react-redux'

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  return <button onClick={logout}>Logout</button>
}
export default Logout
