import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { actionResponse } from '../../store/actions/action-creaters';
import { fetchAuth } from '../../store/async-action/fetch-auth';
import {
  BUTTON_AUTH,
  LINK_QUESTION_AUTH,
  LINK_RECOVER_AUTH,
  LINK_RECOVER_FORGOT_PASS,
  LINK_REGISTRATION_AUTH,
  PATH_AUTH,
  PATH_FORGOT,
  PATH_REG,
  PLACEHOLDER_LOGIN,
  PLACEHOLDER_PASSWORD,
  TEXT_AUTH_RESPONSE,
  TEXT_BUTTON_RESPONSE_FALSE,
  TEXT_ERROR_LOGIN,
  TITLE_AUTH,
  TITLE_AUTH_RESPONSE,
} from '../../utils/constants';
import { getTypeInput } from '../../utils/helpers';
import { Eye } from './eye/eye';
import { FormResponse } from './form-response/form-response';
import { InputAuth } from './input/input-auth';
import { RegisterAuth } from './register-link/register-auth';
import styles from './register.module.css';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const [stateResponse, setStateFalseResponse] = useState(true);
  const [isResponse, setDrawModalResponse] = useState(false);
  const [focusLogin, setFocusLogin] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const toggleFocusPassword = () => setFocusPassword(!focusPassword)
  const toggleFocusLogin = () => setFocusLogin(!focusLogin)
  const [eye, setEye] = useState(false);
  const toggleEye = () => setEye(!eye);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'all',
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const getWayResponse = (response: number) => {
    switch (response) {
      case 0:
        reset();
        break;
      case 1:
        setDrawModalResponse(true);
        setStateFalseResponse(true);
        break;
      case 2:
        setStateFalseResponse(false);
        setDrawModalResponse(false);
        break;
      default:
        setStateFalseResponse(false);
        setDrawModalResponse(false);
        break;
    }
  };

  const onSubmit = async (data: { identifier: string; password: string }) => {
    dispatch(actionResponse(false));
    const getResponse = await fetchAuth(dispatch, data);
    getWayResponse(getResponse);
    dispatch(actionResponse(true));
    if (!getResponse) {
      <Navigate to='/books/all' />;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {isResponse ? (
        <FormResponse
          title={TITLE_AUTH_RESPONSE}
          text={TEXT_AUTH_RESPONSE}
          textButton={TEXT_BUTTON_RESPONSE_FALSE}
          path={PATH_AUTH}
          func={handleSubmit(onSubmit)}
        />
      ) : (
        <form data-test-id='auth-form' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={styles.title}>{TITLE_AUTH}</h2>
          <div className={styles['input-group-auth']}>
            <div className={`${styles['wrapper-input']} ${styles['wrapper-input-auth']} ${styles.margin}`}>
              <InputAuth
                type='text'
                placeholder={PLACEHOLDER_LOGIN}
                reg={register}
                name='identifier'
                error={errors}
                state={stateResponse}
                toggle={toggleFocusLogin}
              />
              {(errors.identifier && !focusLogin) && (
                <p data-test-id='hint' className={`${styles.helps} ${styles['helps-error']}`}>
                  {errors.identifier?.message}
                </p>
              )}
            </div>
            <div className={`${styles['wrapper-input']} ${styles['wrapper-input-auth']}`}>
              <InputAuth
                type={getTypeInput(eye)}
                placeholder={PLACEHOLDER_PASSWORD}
                reg={register}
                name='password'
                error={errors}
                state={stateResponse}
                toggle={toggleFocusPassword}
              />
              {dirtyFields.password ? <Eye func={toggleEye} flag={eye} /> : false}
              {(errors.password && !focusPassword) && (
                <p data-test-id='hint' className={`${styles.helps} ${styles['helps-error']}`}>
                  {errors.password?.message}
                </p>
              )}
            </div>
            {!stateResponse && (
              <span data-test-id='hint' className={`${styles['link-recover']} ${styles['helps-error']}`}>
                {TEXT_ERROR_LOGIN}
              </span>
            )}
            <Link
              to={PATH_FORGOT}
              className={stateResponse ? styles['link-recover'] : `${styles['link-recover']} ${styles.color}`}
            >
              {stateResponse ? LINK_RECOVER_AUTH : LINK_RECOVER_FORGOT_PASS}
            </Link>
          </div>
          <RegisterAuth
            textButton={BUTTON_AUTH}
            path={PATH_REG}
            question={LINK_QUESTION_AUTH}
            textLink={LINK_REGISTRATION_AUTH}
          />
        </form>
      )}
    </div>
  );
};
