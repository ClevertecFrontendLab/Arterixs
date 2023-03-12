import { FieldError } from 'react-hook-form';
import styles from './check.module.css';

interface ICheck {
  watch: boolean | undefined;
  error: FieldError | undefined;
}

export const Check = (props: ICheck) => {
  const { watch, error } = props;
  return (
    <svg className={watch && !error ? styles.check : `${styles.check} ${styles.hidden}`} data-test-id='checkmark'>
      <use href='#check-mark' />
    </svg>
  );
};
