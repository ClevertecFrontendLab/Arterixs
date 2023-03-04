import { IInputForm } from '../../../types/interface'
import styles from './input-form.module.css'

export const InputForm = (props: IInputForm) => {
  const {type, placeholder} = props
  return (
    <>
      <input className={styles.input} type={type} placeholder=' ' />
      <label className={styles.placeholder}>{placeholder}</label>
    </>
  )
}
