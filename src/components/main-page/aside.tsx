import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ButtonArrow } from './button-arrow';
import { arrayGenres } from '../../utils/data';
import { Genres } from './genres';
import { IINititalState } from '../../types/interface';

export const Aside = () => {
  const isLoaded = useSelector((state: IINititalState) => state.loadedCategory && state.loadedList)
  const isError = useSelector((state: IINititalState) => state.errorLoadCategory || state.errorLoadList)
  const genresState = useSelector((state: IINititalState) => state.categoryBooks)
  const [stateAccordeon, setStateAccordeon] = useState(true);
  const toggleAccordeon = () => setStateAccordeon(!stateAccordeon);
  const closedAccordeon = () => setStateAccordeon(false);
  return (
    <aside className='aside'>
      <section className='aside__content'>
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
              data-test-id='navigation-showcase'
            >
              <h2
                className={
                  isActive
                    ? 'active-link__aside_title wrapper-title-aside__title'
                    : stateAccordeon
                    ? 'wrapper-title-aside__title active-link__aside_title'
                    : 'wrapper-title-aside__title'
                }
              > Витрина книг</h2>
              {isError ? null : <ButtonArrow {...{ stateAccordeon, isActive }} key='1' />}
            </div>
          )}
        </NavLink>
        <nav className={isError ? 'genres-block_hidden' : (isLoaded ? (stateAccordeon ? 'genres-block' : 'genres-block_hidden') : 'genres-block_hidden')}>
          <NavLink
            to='/books/all'
            data-test-id='navigation-books'
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
              <Genres {...item} key={item.id} />
            ))}
          </ul>
        </nav>
      </section>
      <section className='aside__link-docs'>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link__aside' : ':')}
          to='/books/contract'
          onClick={closedAccordeon}
          data-test-id='navigation-terms'
        >
          Правила пользования
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link__aside' : ':')}
          to='/books/oferta'
          onClick={closedAccordeon}
          data-test-id='navigation-contract'
        >
          Договор оферты
        </NavLink>
      </section>
    </aside>
  );
};
