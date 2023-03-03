import { Link } from 'react-router-dom'

export const AuthForm = () => {
  console.log('de')
  return (
    <form action='' className="auth-form">
      <h2 className='auth-form-title'>Вход в личный кабинет</h2>
      <div className="auth-form__block-input">
        <div className="input-wrapper input-wrapper_margin">
          <input className="input-wrapper__input" type="text" placeholder='Логин' />
        </div>
        <div className="input-wrapper">
          <input className="input-wrapper__input" type="text" placeholder='Пароль'/>
        </div>
        <Link to="#" className="link-recover">Забыли логин или пароль?</Link>
      </div>
      <div className="auth-form__block-button">
        <button className="button-auth" type='submit'>
          <span>Вход</span>
        </button>
        <div className='wrapper-link-auth'>
          <p className='text-questions'>Нет учётной записи?</p>
          <div className='registr-block'>
            <Link to="/registration" className='register-link'>Регистрация</Link>
            <svg className="arrow-auth">
              <use href='#arrow-auth'/>
            </svg>
          </div>
        </div>
      </div>
    </form>
  )
}
