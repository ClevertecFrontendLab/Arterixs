import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { ICategoryBooks, IListBooks } from '../../types/interface';
import { sortingBooksInCategory } from '../../utils/helpers';

export const Genres = (props: ICategoryBooks) => {
  const { name, path } = props;
  const dispatch = useDispatch()
  const arrayListBooks = useTypedSelector((state) => state.listBooks.list);
  // TODO: refactor
  const getAmountBooks = (genresState: IListBooks[] | [], name: string) => {
    const arrBooksInCategory = genresState.map((item) => item.categories.filter((item) => item === name)).flat()
    return arrBooksInCategory
  }
  const amountBooksArr = getAmountBooks(arrayListBooks, name)
  const clickedInCategory = () => {
    if (props.func) {
      props.func()
    }
    sortingBooksInCategory(arrayListBooks, dispatch, name)
  }

  if (props.id === 5) {
    return (
      <li className='genres'>
        <NavLink
          to={`/books/${path}`}
          onClick={clickedInCategory}
          className={({ isActive }) =>
            isActive
              ? 'genres__name genres__name_position wrapper-title-aside__subtitle_active-link'
              : 'genres__name genres__name_position'
          }
        >
          {name}
        </NavLink>
        <span className='genres__count genres__count_position genres__count_position_active'>{amountBooksArr.length}</span>
      </li>
    );
  }
  return (
    <li className='genres'>
      <NavLink
        to={`/books/${path}`}
        onClick={clickedInCategory}
        className={({ isActive }) =>
          isActive ? 'genres__name wrapper-title-aside__subtitle_active-link' : 'genres__name'
        }
      >
        {name}
      </NavLink>
      <span className='genres__count'>{amountBooksArr.length}</span>
    </li>
  );
};
