import { Outlet } from 'react-router-dom';
import { SpriteAuth } from '../../components/sprite-auth';
import styles from './auth.module.css';

export const AuthPage = () => {
  console.log('dwdwwd');
  return (
    <div className={styles.wrapper}>
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
