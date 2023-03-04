import styles from './eye.module.css'

interface IEye {
  func: () => void,
  flag: boolean
}

export const Eye = (props: IEye) => (
  <button className={styles.button} type='button' onClick={props.func}>
    <svg className={styles.eye}>
      <use href={props.flag ? '#eye-open' : '#eye-close'}/>
    </svg>
  </button>
)
