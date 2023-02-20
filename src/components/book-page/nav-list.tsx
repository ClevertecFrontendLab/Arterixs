import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { IDataIdBook } from '../../types/interface';

export const NavList = (props: { isLoaded: boolean; isError: boolean; dataBook: IDataIdBook | null }) => {
  const breadPath = useTypedSelector((state) => state.navigation.path)
  const { isError, isLoaded, dataBook } = props;
  return (
    <nav className='navigation-page'>
      <div className='nav-list'>
        <p className='nav-list__item'>
          <span>{breadPath}</span>
          <span className='link__content_slash'>/</span>
          <span>{isError ? '' : isLoaded ? dataBook?.title : ''}</span>
        </p>
      </div>
    </nav>
  );
};
