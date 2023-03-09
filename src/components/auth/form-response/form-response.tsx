import { Link } from 'react-router-dom';
import styles from './form-response.module.css';

interface IPropsResponseForm {
  title: string;
  text: string;
  textButton: string;
  path: string;
  func: () => void;
}

export const FormResponse = (props: IPropsResponseForm) => {
  const { title, text, textButton, path, func } = props;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
      <Link to={path}>
        <button className={styles.button} type='button' onClick={func}>
          <span>{textButton}</span>
        </button>
      </Link>
    </div>
  );
};
