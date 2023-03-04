import { Link } from 'react-router-dom'
import { IRegisterLink } from '../../../types/interface'
import styles from './register-link.module.css'

export const RegisterLink = (props: IRegisterLink) => {
  const {func, textButton, path, question, textLink} = props
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type='button' onClick={func}>
        <span>{textButton}</span>
      </button>
      <div className={styles.container}>
        <p className={styles.content}>{question}</p>
        <div className={styles['wrapper-link']}>
          <Link to={path} className={styles.link}>{textLink}</Link>
          <svg className={styles.arrow}>
            <use href='#arrow-auth'/>
          </svg>
        </div>
      </div>
    </div>
  )
}
