import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Loader } from '../../components/loaded/loader';
import { SpriteAuth } from '../../components/sprite-auth';
import { actionAuth } from '../../store/actions/action-creaters';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import styles from './auth.module.css';

export const AuthPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const isToken = localStorage.getItem('token');
    if (isToken) {
      dispatch(actionAuth(true));
    }
  }, [dispatch]);
  const isLoaded = useTypedSelector((state) => state.response.isLoaded);
  const auth = useTypedSelector((state) => state.response.auth);

  return auth ? (
    <Navigate to='/books/all' />
  ) : (
    <div data-test-id='auth' className={styles.wrapper}>
      <Loader isError={false} isLoaded={isLoaded} />
      <SpriteAuth />
      <div className={styles['wrapper-two']}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cleverland</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
