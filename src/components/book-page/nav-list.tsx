import { useParams } from 'react-router-dom';
import { IDataIdBook } from '../../types/interface';
import { convertUrlPathReverse } from '../../utils/helpers';

export const NavList = (props: {isLoaded: boolean, isError: boolean, dataBook: IDataIdBook | null}) => {
  const url = useParams()
  const pathUrl = convertUrlPathReverse(url.category ? url.category : 'Бизнес')
  const {isError, isLoaded, dataBook} = props
  return (
    <nav className='navigation-page'>
      <div className='nav-list'>
        <p className="nav-list__item">
          <span>{isError ? pathUrl : dataBook?.categories[0]}</span>
          <span className='link__content_slash'>/</span>
          <span>{isError ? '' : (isLoaded ? dataBook?.title : '')}</span>
        </p>
      </div>
    </nav>
  )
};
