import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IBurgerState } from '../types/interface';
import avatar from '../assets/image/webp/avatar.webp';
import { Burger } from './burger';
import { MenuBurger } from './menu-burger';
import { ErrorLoad } from './loaded/error';
import { actionAuth } from '../store/actions/action-creaters';

export const Header = (props: IBurgerState) => {
  const dispatch = useDispatch()
  const { burgerState, toggleBurgerMenu } = props;
  const [stateContextMenu, setStateContextMenu] = useState(false)
  const toggleContextMenu = () => setStateContextMenu(!stateContextMenu)
  const clickLogOut = () => {
    localStorage.removeItem('token')
    dispatch(actionAuth(false))
  }
  return (
    <header className='header'>
      <div className='header__wrap'>
        <ErrorLoad />
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
        <section
          className='block-user'
          onClick={toggleContextMenu}
          onKeyUp={() => {}}
          role='button'
          tabIndex={0}>
            <h3 className='block-user__greetings'>Привет, Иван!</h3>
            <img
              src={`${avatar}`}
              style={{ width: '58px', height: '58px' }}
              className='block-user__avatar'
              alt='avatar'
            />
            <div className={stateContextMenu ? 'context-menu' : 'context-menu context-menu_hidden'}>
              <a href="#">Профиль</a>
              <NavLink to='/auth' onClick={clickLogOut}>Выход</NavLink>
            </div>
        </section>
      </div>
    </header>
  );
};
