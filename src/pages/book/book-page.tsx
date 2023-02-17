import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BookView } from '../../components/book-page/book-view';
import { NavList } from '../../components/book-page/nav-list';
import { ReviewView } from '../../components/book-page/review-view';
import { Loader } from '../../components/loaded/loader';
import { fetchBookId } from '../../store/async-action/fetch-book-id';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { getValidIdUrl } from '../../utils/helpers';

export const BookPage = () => {
  const isLoaded = useTypedSelector((state) => state.loadBookPage.loadedIdBook);
  const isError = useTypedSelector((state) => state.loadBookPage.errorIdBook);
  const dataBook = useTypedSelector((state) => state.loadBookPage.dataIdBook);
  const didLogRef = useRef(false);
  const params = useParams();
  const id = getValidIdUrl(params.id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (didLogRef.current === false) {
      fetchBookId(dispatch, id);
      didLogRef.current = true;
    }
  }, [dispatch, id, params]);

  return (
    <main className='main-book-page'>
      <Loader {...{ isLoaded, isError }} />
      <div className='main-navigation-books-page'>
        <NavList {...{ isLoaded, isError, dataBook }} />
      </div>
      <div
        className={
          isError ? 'main-wrap-book-page_hidden' : isLoaded ? 'main-wrap-book-page' : 'main-wrap-book-page_hidden'
        }
      >
        <div className='wrapper-book-page'>
          {dataBook ? <BookView {...dataBook} key={id} /> : false}
          {dataBook ? <ReviewView {...dataBook} key={id + 1} /> : false}
        </div>
      </div>
    </main>
  );
};
