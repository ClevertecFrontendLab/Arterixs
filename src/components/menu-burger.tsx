import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IBurgerState } from '../types/interface';
import { arrayGenres } from '../utils/data';
import { ButtonArrow } from './main-page/button-arrow';
import { Genres } from './main-page/genres';

export const MenuBurger = (props: IBurgerState) => {
  const { burgerState, toggleBurgerMenu } = props;
  const [stateAccordeon, setStateAccordeon] = useState(true);
  const toggleAccordeon = () => setStateAccordeon(!stateAccordeon);
  const closedAccordeon = () => setStateAccordeon(false);
  return (
    <div
      className={burgerState ? 'burger-menu-wrapper burger-menu-wrapper_active' : 'burger-menu-wrapper'}
      data-test-id='burger-navigation'
    >
      <div className='burger-menu-content'>
        <nav className='burger-menu__navigation'>
          <section className='burger-menu-nav'>
            <div className='menu-burger__wrap-title'>
              <NavLink to='/books/all'>
                {({ isActive }) => (
                  <div
                    className={
                      isActive
                        ? 'wrapper-title-aside wrapper-title-aside_active-link'
                        : stateAccordeon
                        ? 'wrapper-title-aside wrapper-title-aside_active-link'
                        : 'wrapper-title-aside'
                    }
                    onClick={toggleAccordeon}
                    onKeyUp={() => {}}
                    role='button'
                    tabIndex={0}
                    data-test-id='burger-showcase'
                  >
                    <h2
                      className={
                        isActive
                          ? 'active-link__aside_title wrapper-title-aside__title'
                          : stateAccordeon
                          ? 'wrapper-title-aside__title active-link__aside_title'
                          : 'wrapper-title-aside__title'
                      }
                    >
                      Витрина книг
                    </h2>
                    <ButtonArrow {...{ stateAccordeon, isActive }} key='1' />
                  </div>
                )}
              </NavLink>
              <section className={stateAccordeon ? 'genres-block' : 'genres-block_hidden'}>
                <NavLink
                  to='/books/all'
                  data-test-id='burger-books'
                  className={({ isActive }) =>
                    isActive
                      ? 'wrapper-title-aside__subtitle wrapper-title-aside__subtitle_active-link '
                      : 'wrapper-title-aside__subtitle'
                  }
                >
                  Все книги
                </NavLink>
                <ul className='genres-block__content'>
                  {arrayGenres.map((item) => (
                    <Genres func={toggleBurgerMenu} {...item} key={item.id} />
                  ))}
                </ul>
              </section>
            </div>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link__aside' : 'menu-burger__docs-link')}
              to='/books/contract'
              onClick={closedAccordeon}
              data-test-id='burger-terms'
            >
              Правила пользования
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link__aside' : 'menu-burger__docs-link')}
              to='/books/oferta'
              onClick={closedAccordeon}
              data-test-id='burger-contract'
            >
              Договор оферты
            </NavLink>
          </section>
        </nav>
        <div className='burger-menu__control'>
          <section className='burger-menu-nav'>
            <a href='#'>Профиль</a>
            <a href='#'>Выход</a>
          </section>
        </div>
      </div>
    </div>
  );
};
