import { useEffect, useRef, useState } from 'react';
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
  const isCategory = useTypedSelector((state) => state.categoryBooks.category.length);
  const dispatch = useDispatch();

  useEffect(() => {
    if (didLogReferense.current === false) {
      dispatch(actionResetStateBooks(false));
      didLogReferense.current = true;
    }
    if (didLogRef.current === false) {
      fetchListBooks(dispatch);
      if (!isCategory) {
        fetchCategoryBooks(dispatch);
      }
      didLogRef.current = true;
    }
  }, [dispatch, isCategory]);

  return (
    <section className='main'>
      <div className='main__wrap'>
        <Aside />
        <Outlet />
      </div>
    </section>
  );
};
