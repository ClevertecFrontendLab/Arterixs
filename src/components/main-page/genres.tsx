import { NavLink } from 'react-router-dom';
import { ICategoryBooks } from '../../types/interface';

export const Genres = (props: ICategoryBooks) => {
  const {name, path} = props
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
        <span className='genres__count genres__count_position genres__count_position_active'>{10}</span>
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
      <span className='genres__count'>{10}</span>
    </li>
  );
};
