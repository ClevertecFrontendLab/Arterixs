import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormAuthSubmit } from '../../../types/interface';
import styles from './input-form.module.css';

type AuthInput = 'identifier' | 'password';

interface IInputAuth {
  type: string;
  placeholder: string;
  name: AuthInput;
  reg: UseFormRegister<IFormAuthSubmit>;
  error: FieldErrors<IFormAuthSubmit>;
  state: boolean;
  toggle: () => void
}

export const InputAuth = (props: IInputAuth) => {
  const { placeholder, name, reg, type, error, state, toggle } = props;
  const isError = Object.keys(error).includes(name);
  return (
    <>
      <input
        className={isError || !state ? `${styles.input} ${styles.error}` : styles.input}
        type={type}
        placeholder=' '
        onFocus={toggle}
        {...reg(name, { required: { value: true, message: 'Поле не может быть пустым' }, onBlur: toggle })}
        autoComplete='off'
      />
      <label className={styles.placeholder}>{placeholder}</label>
    </>
  );
};
