import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Aside } from '../../components/main-page/aside';
import { fetchListBooks } from '../../store/async-action/fetch-list-books';
import { fetchCategoryBooks } from '../../store/async-action/fetch-category';
import { Loader } from '../../components/loaded/loader';

export const LayoutMainPage = () => {
  const didLogRef = useRef(false);
  const dispatch = useDispatch()
  useEffect(() => {
    if (didLogRef.current === false) {
      fetchListBooks(dispatch)
      fetchCategoryBooks(dispatch)
      didLogRef.current = true;
    }
  }, [dispatch])

  return (
    <section className='main'>
      <Loader />
      <div className='main__wrap'>
        <Aside />
        <Outlet />
      </div>
    </section>
  );
}
