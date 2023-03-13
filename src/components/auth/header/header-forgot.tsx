import { Link } from 'react-router-dom';
import { PATH_AUTH, TITLE_RECOVER_HEADER } from '../../../utils/constants';
import styles from './header-forgot.module.css';

export const HeaderForgot = () => (
  <div className={styles.header}>
    <div className={styles['header-wrap']}>
      <svg className={`${styles.arrow}`}>
        <use href='#arrow-auth' />
      </svg>
      <Link to={PATH_AUTH}>{TITLE_RECOVER_HEADER}</Link>
    </div>
  </div>
);
