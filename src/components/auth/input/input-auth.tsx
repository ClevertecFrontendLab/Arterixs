import { UseFormRegister } from 'react-hook-form';
import { IFormAuthSubmit } from '../../../types/interface';
import styles from './input-form.module.css';

type AuthInput = 'identifier' | 'password';

interface IInputAuth {
  type: string;
  placeholder: string;
  name: AuthInput;
  reg: UseFormRegister<IFormAuthSubmit>;
}

export const InputAuth = (props: IInputAuth) => {
  const { placeholder, name, reg, type } = props;

  return (
    <>
      <input className={styles.input} type={type} placeholder=' ' {...reg(name)} autoComplete='off' />
      <label className={styles.placeholder}>{placeholder}</label>
    </>
  );
};
