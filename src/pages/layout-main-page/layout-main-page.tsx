import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Aside } from '../../components/main-page/aside';
import { fetchListBooks } from '../../store/async-action/fetch-list-books';
import { fetchCategoryBooks } from '../../store/async-action/fetch-category';
import { IINititalState } from '../../types/interface';
import { ErrorLoad } from '../../components/loaded/error';


export const LayoutMainPage = () => {
  const dispatch = useDispatch()
  const isLoaded = useSelector((state: IINititalState) => state.loadedCategory && state.loadedList)
  const isError = useSelector((state: IINititalState) => state.errorLoadCategory || state.errorLoadList)
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
      {isError ? '': (!isLoaded ? <div className='blur-wrap'/> : null)}
      <div className='main__wrap'>
        <Aside />
        <Outlet />
      </div>
    </section>
  );
}
