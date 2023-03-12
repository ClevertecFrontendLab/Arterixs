import { IRegisterRestore } from '../../../types/interface';
import styles from './register-link.module.css';

export const RegisterRestore = (props: IRegisterRestore) => {
  const { textButton, question, disabled } = props;
  return (
    <div className={styles.wrapper}>
      <input type='submit' className={styles.button} value={textButton} disabled={disabled} />
      <div className={styles.container}>
        <p className={styles.content}>{question}</p>
      </div>
    </div>
  );
};
