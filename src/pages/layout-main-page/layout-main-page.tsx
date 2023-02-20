import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Aside } from '../../components/main-page/aside';
import { actionResetStateBooks } from '../../store/actions/action-creaters';
import { fetchCategoryBooks } from '../../store/async-action/fetch-category';
import { fetchListBooks } from '../../store/async-action/fetch-list-books';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';

export const LayoutMainPage = () => {
  const didLogRef = useRef(false);
  const didLogReferense = useRef(false);
  const isLoaded = useTypedSelector((state) => state.listBooks.loaded && state.categoryBooks.loaded);
  const dispatch = useDispatch();


  useEffect(() => {
    if (didLogReferense.current === false) {
      dispatch(actionResetStateBooks(false));
      didLogReferense.current = true;
    }
    if (isLoaded) {
      return;
    }
    if (didLogRef.current === false) {
      fetchListBooks(dispatch);
      fetchCategoryBooks(dispatch);
      didLogRef.current = true;
    }
  }, [dispatch, isLoaded]);

  return (
    <section className='main'>
      <div className='main__wrap'>
        <Aside />
        <Outlet />
      </div>
    </section>
  );
};
