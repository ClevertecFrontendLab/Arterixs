import { AuthForm } from '../../components/auth/form-auth'
import { SpriteAuth } from '../../components/sprite-auth'

export const AuthPage = () => {
  console.log('dwdwwd')
  return (
    <div className="auth-wrapper">
      <SpriteAuth />
      <div className="auth-wrapper-two">
        <div className="auth-container">
          <h1 className="auth-title">Cleverland</h1>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
