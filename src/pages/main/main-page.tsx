import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Search } from '../../components/main-page/search';
import { Content } from '../../components/main-page/content';
import { ContentList } from '../../components/main-page/content-list';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { Loader } from '../../components/loaded/loader';
import {
  getValidUrlCategory,
  searchCategoryBreadLink,
  sortingBooksInCategory,
  sortingBooksInRating,
} from '../../utils/helpers';

export const MainPage = () => {
  const params = useParams();
  const categoryState = useTypedSelector((state) => state.categoryBooks.category);
  const isLoaded = useTypedSelector((state) => state.categoryBooks.loaded && state.listBooks.loaded);
  const isError = useTypedSelector((state) => state.categoryBooks.error || state.listBooks.error);
  const arrayListBooks = useTypedSelector((state) => state.listBooks.list);
  const categoryUrl = getValidUrlCategory(params.category);
  const path = searchCategoryBreadLink(categoryUrl, categoryState);
  const [sort, setSorting] = useState(false);
  const [content, setContent] = useState(true);
  const [value, setValue] = useState('');
  const [categories, setCategory] = useState(arrayListBooks);
  const getWindowContent = () => setContent(true);
  const getListContent = () => setContent(false);
  const toggleSortingButton = () => setSorting(!sort);

  const sortInRating = sortingBooksInRating(categories, sort);
  const searchArrayBookTitle = sortInRating.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));

  useEffect(() => {
    if (arrayListBooks.length) {
      const category = sortingBooksInCategory(arrayListBooks, path);
      setCategory([...category]);
    }
  }, [arrayListBooks, path]);

  return (
    <main style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Loader {...{ isLoaded, isError }} />
      <section className={isError ? 'main-hidden' : isLoaded ? 'main-content' : 'main-hidden'}>
        <Search
          {...{
            window: getWindowContent,
            list: getListContent,
            content,
            func: toggleSortingButton,
            sort,
            setInput: setValue,
            search: value,
          }}
        />
        {content ? (
          <Content arrayList={searchArrayBookTitle} search={value} />
        ) : (
          <ContentList arrayList={searchArrayBookTitle} search={value} />
        )}
      </section>
    </main>
  );
};
