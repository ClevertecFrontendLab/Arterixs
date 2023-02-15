import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Aside } from '../../components/main-page/aside';
import { fetchListBooks } from '../../store/async-action/fetch-list-books';
import { fetchCategoryBooks } from '../../store/async-action/fetch-category';
import { IINititalState } from '../../types/interface';

export const LayoutMainPage = () => {
  const dispatch = useDispatch()
  const isListBooks = useSelector((state: IINititalState) => Boolean(state.listBooks.length))
  const isCategoryBooks = useSelector((state: IINititalState) => Boolean(state.categoryBooks.length))
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
      <div className='main__wrap'>
        <Aside />
        <Outlet />
      </div>
    </section>
  );
}
