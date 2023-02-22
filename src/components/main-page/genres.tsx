import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { ICategoryBooks } from '../../types/interface';
import { getAmountBooks } from '../../utils/helpers';

export const Genres = (props: ICategoryBooks) => {
  const { name, path } = props;
  const arrayListBooks = useTypedSelector((state) => state.listBooks.list);
  const amountBooksArr = getAmountBooks(arrayListBooks, name)

  if (props.id === 5) {
    return (
      <li className='genres'>
        <NavLink
          to={`/books/${path}`}
          onClick={props.func}
          className={({ isActive }) =>
            isActive
              ? 'genres__name genres__name_position wrapper-title-aside__subtitle_active-link'
              : 'genres__name genres__name_position'
          }
        >
          {name}
        </NavLink>
        <span className={arrayListBooks.length ? 'genres__count genres__count_position genres__count_position_active' : 'genres___count_hidden'}>{amountBooksArr.length}</span>
      </li>
    );
  }
  return (
    <li className='genres'>
      <NavLink
        to={`/books/${path}`}
        onClick={props.func}
        className={({ isActive }) =>
          isActive ? 'genres__name wrapper-title-aside__subtitle_active-link' : 'genres__name'
        }
      >
        {name}
      </NavLink>
      <span className={arrayListBooks.length ? 'genres__count' : 'genres___count_hidden'}>{amountBooksArr.length}</span>
    </li>
  );
};
