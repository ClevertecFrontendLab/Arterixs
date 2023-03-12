import { requestRestoreProps } from '../../../types/types';
import styles from './form-response.module.css';

export const FormRequestRestore = (props: requestRestoreProps) => {
  const { title, text } = props;
  return (
    <div className={styles.wrapper} data-test-id='status-block'>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
