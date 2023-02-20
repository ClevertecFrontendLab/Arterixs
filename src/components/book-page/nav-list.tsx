import { NavLink, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { IDataIdBook } from '../../types/interface';
import { getValidUrlCategory, searchCategoryBreadLink } from '../../utils/helpers';

export const NavList = (props: { isLoaded: boolean; isError: boolean; dataBook: IDataIdBook | null }) => {
  const params = useParams()
  const categoryState = useTypedSelector((state) => state.categoryBooks.category)
  const categoryUrl = getValidUrlCategory(params.category)
  const pathBreadCrumbs = searchCategoryBreadLink(categoryUrl, categoryState)
  const { isError, isLoaded, dataBook } = props;
  return (
    <nav className='navigation-page'>
      <div className='nav-list'>
        <p className='nav-list__item'>
          <NavLink to={`/books/${categoryUrl}`}>{pathBreadCrumbs}</NavLink>
          <span className='link__content_slash'>/</span>
          <span>{isError ? '' : isLoaded ? dataBook?.title : ''}</span>
        </p>
      </div>
    </nav>
  );
};
