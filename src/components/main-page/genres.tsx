import { NavLink } from 'react-router-dom';
import { IGenres } from '../../types/interface';

export const Genres = (props: IGenres) => {
  if (props.id === 11 || props.id === 14) {
    return (
      <li className='genres'>
        <NavLink
          to={props.url}
          onClick={props.func}
          className={({ isActive }) =>
            isActive
              ? 'genres__name genres__name_position wrapper-title-aside__subtitle_active-link'
              : 'genres__name genres__name_position'
          }
        >
          {props.genres}
        </NavLink>
        <span className='genres__count genres__count_position genres__count_position_active'>{props.count}</span>
      </li>
    );
  }
  return (
    <li className='genres'>
      <NavLink
        to={props.url}
        onClick={props.func}
        className={({ isActive }) =>
          isActive ? 'genres__name wrapper-title-aside__subtitle_active-link' : 'genres__name'
        }
      >
        {props.genres}
      </NavLink>
      <span className='genres__count'>{props.count}</span>
    </li>
  );
};
