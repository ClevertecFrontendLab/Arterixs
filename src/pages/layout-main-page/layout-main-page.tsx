import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Aside } from '../../components/main-page/aside';
import { fetchListBooks } from '../../store/async-action/fetch-list-books';
import { fetchCategoryBooks } from '../../store/async-action/fetch-category';
import { Loader } from '../../components/loaded/loader';

export const LayoutMainPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    let ignore = false
    if (!ignore) {
      fetchListBooks(dispatch)
      fetchCategoryBooks(dispatch)
    }
    return () => { ignore = true }
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
