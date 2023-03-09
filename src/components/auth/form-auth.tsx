import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  BUTTON_AUTH,
  LINK_QUESTION_AUTH,
  LINK_RECOVER_AUTH,
  LINK_REGISTRATION_AUTH,
  PATH_FORGOT,
  PATH_REG,
  PLACEHOLDER_LOGIN,
  PLACEHOLDER_PASSWORD,
  TITLE_AUTH,
} from '../../utils/constants';
import { getTypeInput } from '../../utils/helpers';
import { Eye } from './eye/eye';
import { InputAuth } from './input/input-auth';
import { RegisterAuth } from './register-link/register-auth';
import styles from './register.module.css';

export const AuthForm = () => {
  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const onSubmit = (data: { identifier: string; password: string }) => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>{TITLE_AUTH}</h2>
      <div className={styles['input-group-auth']}>
        <div className={`${styles['wrapper-input']} ${styles['wrapper-input-auth']} ${styles.margin}`}>
          <InputAuth type='text' placeholder={PLACEHOLDER_LOGIN} reg={register} name='identifier' />
        </div>
        <div className={`${styles['wrapper-input']} ${styles['wrapper-input-auth']}`}>
          <InputAuth type={getTypeInput(eye)} placeholder={PLACEHOLDER_PASSWORD} reg={register} name='password' />
          <Eye func={toggleEye} flag={eye} />
        </div>
        <Link to={PATH_FORGOT} className={styles['link-recover']}>
          {LINK_RECOVER_AUTH}
        </Link>
      </div>
      <RegisterAuth
        textButton={BUTTON_AUTH}
        path={PATH_REG}
        question={LINK_QUESTION_AUTH}
        textLink={LINK_REGISTRATION_AUTH}
      />
    </form>
  );
};
