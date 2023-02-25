import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../store/hooks/use-typed-selector';
import { IBurgerState } from '../types/interface';
import { ButtonArrow } from './main-page/button-arrow';
import { Genres } from './main-page/genres';

export const MenuBurger = (props: IBurgerState) => {
  const isError = useTypedSelector((state) => state.categoryBooks.error || state.listBooks.error);
  const genresState = useTypedSelector((state) => state.categoryBooks.category);
  const { burgerState, toggleBurgerMenu } = props;
  const [stateAccordeon, setStateAccordeon] = useState(true);
  const toggleAccordeon = () => setStateAccordeon(!stateAccordeon);
  const closedAccordeon = () => setStateAccordeon(false);
  const clickDocs = () => {
    toggleBurgerMenu();
    closedAccordeon();
  };

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
                    onClick={isError ? undefined : toggleAccordeon}
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
                    {isError ? null : <ButtonArrow {...{ stateAccordeon, isActive }} key='1' />}
                  </div>
                )}
              </NavLink>
              <nav
                className={!isError ? (stateAccordeon ? 'genres-block' : 'genres-block_hidden') : 'genres-block_hidden'}
              >
                <NavLink
                  to='/books/all'
                  data-test-id='burger-books'
                  onClick={toggleBurgerMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'wrapper-title-aside__subtitle wrapper-title-aside__subtitle_active-link '
                      : 'wrapper-title-aside__subtitle'
                  }
                >
                  Все книги
                </NavLink>
                <ul className='genres-block__content'>
                  {genresState.map((item) => (
                    <Genres func={toggleBurgerMenu} {...item} data='burger' key={item.id} />
                  ))}
                </ul>
              </nav>
            </div>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link__aside' : 'menu-burger__docs-link')}
              to='/books/contract'
              onClick={clickDocs}
              data-test-id='burger-terms'
            >
              Правила пользования
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active-link__aside' : 'menu-burger__docs-link')}
              to='/books/oferta'
              onClick={clickDocs}
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
