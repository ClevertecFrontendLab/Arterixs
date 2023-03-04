import { useState } from 'react';
import { LINK_AUTH, LINK_QUESTION_REG, TITLE_REGISTRATION } from '../../utils/constants';
import { switchStep } from '../../utils/helpers';
import { Eye } from './eye/eye';
import { InputForm } from './input/input-form';
import { RegisterLink } from './register-link/register-link';
import styles from './register.module.css';

export const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [flag, setFlag] = useState(false);
  const updateStep = () => (step === 3 ? setStep(1) : setStep(step + 1));
  const toggleEye = () => setFlag(!flag);
  const getType = (flag: boolean) => (flag ? 'text' : 'password');
  const metaForm = switchStep(step);
  const {
    typeInputUp,
    typeInputDown,
    placeholderInputUp,
    placeholderInputDown,
    helpsInputDown,
    helpsInputUp,
    textButton,
    typeButton,
  } = metaForm;
  const typeInput = step === 1 ? getType(flag) : typeInputDown;

  return (
    <form action='' className={styles.form}>
      <div className={styles['wrapper-title']}>
        <h2 className={styles.title}>{TITLE_REGISTRATION}</h2>
        <p className={styles.subtitle}>{step} шаг из 3</p>
      </div>
      <div className={styles['input-group-reg']}>
        <div className={styles['wrapper-input']}>
          <InputForm type={typeInputUp} placeholder={placeholderInputUp} />
          <p className={styles.helps}>{helpsInputUp}</p>
        </div>
        <div className={styles['wrapper-input']}>
          <InputForm type={typeInput} placeholder={placeholderInputDown} />
          {step === 1 ? <Eye func={toggleEye} flag={flag} /> : null}
          <p className={styles.helps}>{helpsInputDown}</p>
        </div>
      </div>
      <RegisterLink
        func={updateStep}
        textButton={textButton.toUpperCase()}
        path='/auth'
        question={LINK_QUESTION_REG}
        textLink={LINK_AUTH}
      />
    </form>
  );
};
