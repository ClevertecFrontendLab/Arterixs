import { Link } from 'react-router-dom';
import { IBurgerState } from '../types/interface';
import avatar from '../assets/image/webp/avatar.webp';
import { Burger } from './burger';
import { MenuBurger } from './menu-burger';

export const Header = (props: IBurgerState) => {
  const { burgerState, toggleBurgerMenu } = props;
  return (
    <header className='header'>
      <div className='header__wrap'>
        <MenuBurger {...{ burgerState, toggleBurgerMenu }} />
        <Burger {...{ burgerState, toggleBurgerMenu }} />
        <section>
          <Link to='/' className='block-logo'>
            <svg className='block-logo__icon'>
              <use href='#logo' />
            </svg>
            <h2 className='block-logo__title'>Cleverland</h2>
          </Link>
        </section>
        <section className='block-title'>
          <h1 className='block-title__page'>Библиотека</h1>
        </section>
        <section className='block-user'>
          <h3 className='block-user__greetings'>Привет, Иван!</h3>
          <img
            src={`${avatar}`}
            style={{ width: '58px', height: '58px' }}
            className='block-user__avatar'
            alt='avatar'
          />
        </section>
      </div>
    </header>
  );
};
