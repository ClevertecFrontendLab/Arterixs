import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Search } from '../../components/main-page/search';
import { Content } from '../../components/main-page/content';
import { ContentList } from '../../components/main-page/content-list';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { Loader } from '../../components/loaded/loader';
import { getValidUrlCategory, searchCategoryBreadLink, sortingBooksInCategory } from '../../utils/helpers';

export const MainPage = () => {
  const dispatch = useDispatch();
  const params = useParams()
  const categoryState = useTypedSelector((state) => state.categoryBooks.category)
  const categoryUrl = getValidUrlCategory(params.category)
  const isLoaded = useTypedSelector((state) => state.categoryBooks.loaded && state.listBooks.loaded);
  const isError = useTypedSelector((state) => state.categoryBooks.error || state.listBooks.error);
  const arrayListBooks = useTypedSelector((state) => state.listBooks.list);
  const sortingBooks = useTypedSelector((state) => state.sortingBooks.bookSortingList)
  const [content, setContent] = useState(true);
  const getWindowContent = () => setContent(true);
  const getListContent = () => setContent(false);
 // TODO: fixed
  const path = searchCategoryBreadLink(categoryUrl, categoryState)
  sortingBooksInCategory(arrayListBooks, dispatch, path)


  return (
    <main>
      <Loader {...{ isLoaded, isError }} />
      <section className={isError ? 'main-hidden' : isLoaded ? 'main-content' : 'main-hidden'}>
        <Search {...{ window: getWindowContent, list: getListContent, content }} />
        {content ? <Content arrayList={sortingBooks} /> : <ContentList arrayList={sortingBooks} />}
      </section>
    </main>
  );
};
