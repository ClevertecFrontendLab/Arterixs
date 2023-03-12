import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormForgotMail, IFormForgotPass } from '../../../types/interface';
import styles from './input-form.module.css';

interface IInputForgot {
  type: string;
  placeholder: string;
  name: 'password' | 'passwordConfirmation';
  reg: UseFormRegister<IFormForgotPass>;
  error: FieldErrors<IFormForgotPass>;
  state?: boolean;
  rules?: any;
  toggleFocus?: () => void;
  stateType: boolean;
}

export const InputForgotPass = (props: IInputForgot) => {
  const { placeholder, name, reg, type, error, state, rules, stateType } = props;
  const isError = Object.keys(error).includes(name);
  return (
    <>
      <input
        className={isError ? `${styles.input} ${styles.error}` : styles.input}
        type={stateType ? 'text' : 'password'}
        placeholder=' '
        onFocus={props.toggleFocus}
        {...reg(name, { ...rules, onBlur: props.toggleFocus })}
        autoComplete='off'
      />
      <label className={styles.placeholder}>{placeholder}</label>
    </>
  );
};
