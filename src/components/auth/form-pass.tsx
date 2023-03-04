import { Link } from 'react-router-dom';
import { InputForm } from './input/input-form';
import { RegisterLink } from './register-link/register-link';
import {
  BUTTON_RECOVER,
  LINK_QUESTION_AUTH,
  LINK_REGISTRATION_AUTH,
  PLACEHOLDER_RECOVER_MAIL,
  TITLE_RECOVER,
  TITLE_RECOVER_HEADER,
} from '../../utils/constants';
import styles from './pass.module.css';

export const PassForm = () => {
  const func = () => console.log('dw');
  return (
    <form action='' className={styles.form}>
      <div className={styles.header}>
        <div className={styles['header-wrap']}>
          <svg className={`${styles.arrow}`}>
            <use href='#arrow-auth' />
          </svg>
          <Link to='/auth'>{TITLE_RECOVER_HEADER}</Link>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{TITLE_RECOVER}</h2>
        <div className={styles['wrapper-input']}>
          <InputForm type='mail' placeholder='Email' />
          <p className={styles.helps}>{PLACEHOLDER_RECOVER_MAIL}</p>
        </div>
        <RegisterLink
          func={func}
          textButton={BUTTON_RECOVER}
          path='/auth'
          question={LINK_QUESTION_AUTH}
          textLink={LINK_REGISTRATION_AUTH}
        />
      </div>
    </form>
  );
};
