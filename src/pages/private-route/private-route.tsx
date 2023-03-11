import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { actionAuth } from '../../store/actions/action-creaters';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const isToken = localStorage.getItem('token')
    if (isToken) {
      dispatch(actionAuth(true))
    }
  },[dispatch])
  const auth = useTypedSelector((state) => state.response.auth)
  return auth ? children : <Navigate to='/auth' />;
};
