import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './register.module.css'

const switchStep = (step: number) => {
  switch (step) {
    case 1:
      return {
        typeInputUp: 'text',
        placeholderInputUp: 'Придумайте логин для входа',
        helpsInputUp: 'Используйте для логина латинский алфавит и цифры',
        typeInputDown: 'password',
        placeholderInputDown: 'Пароль',
        helpsInputDown: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
        textButton: 'следующий шаг',
        typeButton: 'button'
      }
    case 2:
      return {
        typeInputUp: 'text',
        placeholderInputUp: 'Имя',
        helpsInputUp: '',
        typeInputDown: 'text',
        placeholderInputDown: 'Фамилия',
        helpsInputDown: '',
        textButton: 'последний шаг',
        typeButton: 'button'
      }
    case 3:
      return {
        typeInputUp: 'tel',
        placeholderInputUp: 'Номер телефона',
        helpsInputUp: 'В формате +375 (xx) xxx-xx-xx ',
        typeInputDown: 'email',
        placeholderInputDown: 'E-mail',
        helpsInputDown: '',
        textButton: 'зарегистрироваться',
        typeButton: 'submit'
      }
    default:
      return {
        typeInputUp: '',
        placeholderInputUp: '',
        helpsInputUp: '',
        typeInputDown: '',
        placeholderInputDown: '',
        helpsInputDown: '',
        textButton: '',
        typeButton: 'button'
    }
  }
}

export const RegisterForm = () => {
  const [step, setStep] = useState(1)
  const [flag, setFlag] = useState(false)
  const updateStep = () => step === 3 ? setStep(1) : setStep(step + 1)
  const toggleEye = () => setFlag(!flag)
  const metaForm = switchStep(step)
  const {typeInputUp, typeInputDown, placeholderInputUp, placeholderInputDown, helpsInputDown, helpsInputUp, textButton, typeButton} = metaForm
  const getType = (flag: boolean) => flag ? 'text' : 'password'
  return (
    <form action='' className="auth-form">
      <div className={styles.wrapper__title}>
        <h2 className={styles.title}>Регистрация</h2>
        <p className={styles.subtitle}>{step} шаг из 3</p>
      </div>
      <div className='auth-form__block-input'>
        <div className={styles['wrapper-input']}>
          <input className={styles.input} type={typeInputUp} placeholder={placeholderInputUp} />
          <p className={styles.helps}>{helpsInputUp}</p>
        </div>
        <div className={styles['wrapper-input']}>
          <input className={styles.input} type={step === 1 ? getType(flag) : typeInputDown} placeholder={placeholderInputDown}/>
          <button className={step === 1 ? styles['button-eye'] : styles.hidden} type='button' onClick={toggleEye}>
            <svg className={styles.eye}>
              <use href={flag ? '#eye-open' : '#eye-close'}/>
            </svg>
          </button>
          <p className={styles.helps}>{helpsInputDown}</p>
        </div>
      </div>
      <div className="auth-form__block-button">
        <button className="button-auth" type='button' onClick={updateStep}>
          <span>{textButton.toUpperCase()}</span>
        </button>
        <div className='wrapper-link-auth'>
          <p className='text-questions'>Есть учётная запись?</p>
          <div className='registr-block'>
            <Link to="/auth" className='register-link'>Войти</Link>
            <svg className="arrow-auth">
              <use href='#arrow-auth'/>
            </svg>
          </div>
        </div>
      </div>
    </form>
  )
}
