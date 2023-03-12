import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  BUTTON_RECOVER,
  CONTENT_REQUEST_RESTORE,
  LINK_QUESTION_AUTH,
  LINK_REGISTRATION_AUTH,
  PATH_REG,
  PLACEHOLDER_RECOVER_MAIL,
  REG_ERROR,
  TITLE_RECOVER,
  TITLE_REQUEST_RESTORE,
} from '../../../utils/constants';
import { HeaderForgot } from '../header/header-forgot';
import { InputForgotMail } from '../input/input-mail-forgot';
import { RegisterAuth } from '../register-link/register-auth';
import { IFormForgotMail } from '../../../types/interface';
import { actionResponse } from '../../../store/actions/action-creaters';
import { requestForRestore } from '../../../http/req-restore';
import { FormRequestRestore } from '../form-response/form-restore';
import styles from '../pass.module.css';

export const FormMailForgot = () => {
  const dispatch = useDispatch();
  const [stateRequest, setStateRequest] = useState(2);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: IFormForgotMail) => {
    dispatch(actionResponse(false));
    const getResponse = await requestForRestore(data);
    setStateRequest(getResponse);
    dispatch(actionResponse(true));
  };

  return (
    <div style={{ width: '100%' }}>
      {!stateRequest ? (
        <FormRequestRestore title={TITLE_REQUEST_RESTORE} text={CONTENT_REQUEST_RESTORE} />
      ) : (
        <form data-test-id='send-email-form' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <HeaderForgot />
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{TITLE_RECOVER}</h2>
            <div className={styles['wrapper-input']}>
              <InputForgotMail reg={register} error={errors} />
              {errors.email && <p data-test-id='hint' className={`${styles.helps} ${styles['helps-error']}`}>{errors.email.message}</p>}
              {stateRequest === REG_ERROR && <p data-test-id='hint' className={`${styles.helps} ${styles['helps-error']}`}>error</p>}
              <p className={styles.helps}>{PLACEHOLDER_RECOVER_MAIL}</p>
            </div>
            <RegisterAuth
              textButton={BUTTON_RECOVER}
              path={PATH_REG}
              question={LINK_QUESTION_AUTH}
              textLink={LINK_REGISTRATION_AUTH}
            />
          </div>
        </form>
      )}
    </div>
  );
};
