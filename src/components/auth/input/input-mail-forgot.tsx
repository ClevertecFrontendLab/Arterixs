import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormForgotMail } from '../../../types/interface';
import styles from './input-form.module.css';

interface IInputForgotMail {
  reg: UseFormRegister<IFormForgotMail>;
  error: FieldErrors<IFormForgotMail>;
}

export const InputForgotMail = (props: IInputForgotMail) => {
  const { reg, error } = props;
  return (
    <>
      <input
        className={error.email ? `${styles.input} ${styles.error}` : styles.input}
        type='mail'
        placeholder=' '
        {...reg('email', {
          required: { value: true, message: 'Поле не может быть пустым' },
          pattern: { value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/, message: 'Введите корректный e-mail' },
        })}
        autoComplete='off'
      />
      <p className={styles.placeholder}>Email</p>
    </>
  );
};
