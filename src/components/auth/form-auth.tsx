import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BUTTON_AUTH, LINK_QUESTION_AUTH, LINK_RECOVER_AUTH, LINK_REGISTRATION_AUTH, PLACEHOLDER_LOGIN, PLACEHOLDER_PASSWORD, TITLE_AUTH } from '../../utils/constants'
import { Eye } from './eye/eye'
import { InputForm } from './input/input-form'
import { RegisterLink } from './register-link/register-link'
import styles from './register.module.css'

export const AuthForm = () => {
  const func = () => console.log('ale')
  const [flag, setFlag] = useState(false)
  const toggleEye = () => setFlag(!flag)
  const getType = (flag: boolean) => flag ? 'text' : 'password'
  return (
    <form action='' className={styles.form}>
      <h2 className={styles.title}>{TITLE_AUTH}</h2>
      <div className={styles['input-group-auth']}>
        <div className={`${styles['wrapper-input']} ${styles['wrapper-input-auth']} ${styles.margin}`}>
          <InputForm type='text' placeholder={PLACEHOLDER_LOGIN}/>
        </div>
        <div className={`${styles['wrapper-input']} ${styles['wrapper-input-auth']}`}>
          <InputForm type={getType(flag)} placeholder={PLACEHOLDER_PASSWORD}/>
          <Eye func={toggleEye} flag={flag}/>
        </div>
        <Link to="#" className={styles['link-recover']}>{LINK_RECOVER_AUTH}</Link>
      </div>
      <RegisterLink
        func = {func}
        textButton ={BUTTON_AUTH}
        path = '/registration'
        question ={LINK_QUESTION_AUTH}
        textLink ={LINK_REGISTRATION_AUTH}
      />
    </form>
  )
}
