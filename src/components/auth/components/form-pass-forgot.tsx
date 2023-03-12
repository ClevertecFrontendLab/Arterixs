import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { validPassword } from '../form-register';
import {
  dataResetPassword,
  ERROR_COINCEDENSE_PASSWTORD,
  TEXT_BUTTON_FORGOT_PASS,
  TEXT_REGISTER_RESTORE,
  TITLE_RECOVER,
} from '../../../utils/constants';
import { InputForgotPass } from '../input/input-forgot-pass';
import { Eye } from '../eye/eye';
import { Check } from '../check-mark/check';
import { switchStep } from '../../../utils/helpers';
import { RegisterRestore } from '../register-link/register-restore';
import { IFormRestoreSubmit } from '../../../types/interface';
import { actionResponse } from '../../../store/actions/action-creaters';
import { requestForResetPassword } from '../../../http/req-password-restore';
import { FormResponse } from '../form-response/form-response';
import styles from '../pass.module.css';

export const FormPassForgot = (props: { code: string }) => {
  const dispatch = useDispatch();
  const [isResponse, setResponse] = useState(false);
  const [countData, setCountData] = useState(0);
  const [eyeUp, setEyeUp] = useState(false);
  const [eyeDown, setEyeDown] = useState(false);
  const [focusPassword, setFocusPassword] = useState(true);
  const toggleFocusPassword = () => setFocusPassword(!focusPassword);
  const toggleEyeUp = () => setEyeUp(!eyeUp);
  const toggleEyeDown = () => setEyeDown(!eyeDown);
  const dateValidation = switchStep(1);
  const { rulesDown } = dateValidation;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
    defaultValues: {
      password: '',
      passwordConfirmation: '',
      code: props.code,
    },
  });

  const validationRepeatPassword = {
    required: true,
    validate: {
      isCoinsedense: (value: string) => watch('password') === value,
    },
  };

  const onSubmit = async (data: IFormRestoreSubmit) => {
    dispatch(actionResponse(false));
    const getResponse = await requestForResetPassword(data);
    setCountData(getResponse);
    setResponse(true);
    dispatch(actionResponse(true));
  };
  const clickButtonResponse = () => reset();

  return (
    <div style={{ width: '100%' }}>
      {isResponse ? (
        <FormResponse
          {...dataResetPassword[countData]}
          func={countData === 1 ? handleSubmit(onSubmit) : clickButtonResponse}
        />
      ) : (
        <form data-test-id='reset-password-form' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={`${styles.wrapper} ${styles['wrapper-pad']}`}>
            <h2 className={styles.title}>{TITLE_RECOVER}</h2>
            <div className={styles['wrapper-input']}>
              <InputForgotPass
                type='password'
                placeholder='Новый пароль'
                reg={register}
                name='password'
                rules={rulesDown}
                error={errors}
                toggleFocus={toggleFocusPassword}
                stateType={eyeUp}
              />
              <Eye func={toggleEyeUp} flag={eyeUp} />
              <Check watch={dirtyFields.password} error={errors.password} />
              {validPassword(errors.password?.types, focusPassword)}
            </div>
            <div className={styles['wrapper-input']}>
              <InputForgotPass
                type='password'
                placeholder='Повторите пароль'
                reg={register}
                name='passwordConfirmation'
                rules={validationRepeatPassword}
                error={errors}
                stateType={eyeDown}
              />
              <Eye func={toggleEyeDown} flag={eyeDown} />
              {errors.passwordConfirmation?.types && (
                <p data-test-id='hint' className={`${styles.helps} ${styles['helps-error']}`}>
                  {ERROR_COINCEDENSE_PASSWTORD}
                </p>
              )}
            </div>
            <RegisterRestore
              textButton={TEXT_BUTTON_FORGOT_PASS}
              question={TEXT_REGISTER_RESTORE}
              disabled={errors.passwordConfirmation?.types ? true : false}
            />
          </div>
        </form>
      )}
    </div>
  );
};
