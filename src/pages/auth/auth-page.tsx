import { Outlet } from 'react-router-dom';
import { Loader } from '../../components/loaded/loader';
import { SpriteAuth } from '../../components/sprite-auth';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import styles from './auth.module.css';

export const AuthPage = () => {
  const isLoaded = useTypedSelector((state) => state.response.isLoaded);
  return (
    <div className={styles.wrapper}>
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
