import { FieldError } from 'react-hook-form';
import styles from './check.module.css';

interface ICheck {
  watch: boolean | undefined;
  error: FieldError | undefined;
}

export const Check = () => (
    <svg className={styles.check} data-test-id='checkmark'>
      <use href='#check-mark' />
    </svg>
);
