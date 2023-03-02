import { Navigate } from 'react-router-dom'
import { useAuth } from '../../store/auth/auth'

export const PrivateRoute = ({children}: {children: JSX.Element}) => {
  const auth = useAuth()
  return auth ? children : <Navigate to='/auth' />
}


