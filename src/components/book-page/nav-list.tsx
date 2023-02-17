import { IDataIdBook } from '../../types/interface';
import { ErrorLoad } from '../loaded/error';

export const NavList = (props: {isLoaded: boolean, isError: boolean, dataBook: IDataIdBook | null}) => {
  const {isError, isLoaded, dataBook} = props
  return (
    <nav className='navigation-page'>
      <div className='nav-list'>
        <p className='nav-list__item'>Бизнес-книги</p>
        <span className='link__content_slash'>/</span>
        <p className="nav-list__item">{isError ? '' : (isLoaded ? dataBook?.title : '')}`</p>
      </div>
    </nav>
  )
};
