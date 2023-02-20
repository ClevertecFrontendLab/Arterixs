import { NavLink } from 'react-router-dom';
import { ICategoryBooks } from '../../types/interface';
import { setPathInStateNavigation } from '../../utils/helpers';

export const Genres = (props: ICategoryBooks) => {
  const { name, path } = props;
  const clickedLink = (): void => {
    if (props.func) {
      props.func()
    }
    if (props.disp) {
      setPathInStateNavigation(name, props.disp)
    }
  }
  if (props.id === 5) {
    return (
      <li className='genres'>
        <NavLink
          to={`/books/${path}`}
          onClick={clickedLink}
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
        onClick={clickedLink}
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
