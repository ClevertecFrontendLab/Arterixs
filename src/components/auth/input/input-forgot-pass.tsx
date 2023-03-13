import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormForgotMail, IFormForgotPass } from '../../../types/interface';
import styles from './input-form.module.css';

interface IInputForgot {
  placeholder: string;
  name: 'password' | 'passwordConfirmation';
  reg: UseFormRegister<IFormForgotPass>;
  error: FieldErrors<IFormForgotPass>;
  rules?: any;
  toggleFocus: () => void;
  stateType: boolean;
  onChange?: () => void
}

export const InputForgotPass = (props: IInputForgot) => {
  const { placeholder, name, reg, error, rules, stateType, toggleFocus } = props;
  const isError = Object.keys(error).includes(name);
  return (
    <>
      <input
        className={isError ? `${styles.input} ${styles.error}` : styles.input}
        type={stateType ? 'text' : 'password'}
        placeholder=' '
        onFocus={toggleFocus}
        {...reg(name, { ...rules, onBlur: props.toggleFocus, onChange: props.onChange })}
        autoComplete='off'
      />
      <label className={styles.placeholder}>{placeholder}</label>
    </>
  );
};
