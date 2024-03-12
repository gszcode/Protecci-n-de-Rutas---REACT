import { useDispatch } from 'react-redux'
import { getMorty } from '../../services/auth.service'
import { createUser } from '../../redux/states/user'
import { PrivateRoutes } from '../../models/routes'
import { useNavigate } from 'react-router-dom'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async () => {
    try {
      const result = await getMorty()
      dispatch(createUser(result))
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Este es el Login</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  )
}

export default Login
