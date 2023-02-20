import { useState } from 'react';

import { Search } from '../../components/main-page/search';
import { Content } from '../../components/main-page/content';
import { ContentList } from '../../components/main-page/content-list';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { Loader } from '../../components/loaded/loader';

export const MainPage = () => {
  const isLoaded = useTypedSelector((state) => state.categoryBooks.loaded && state.listBooks.loaded);
  const isError = useTypedSelector((state) => state.categoryBooks.error || state.listBooks.error);
  const arrayListBooks = useTypedSelector((state) => state.listBooks.list);
  const [content, setContent] = useState(true);
  const getWindowContent = () => setContent(true);
  const getListContent = () => setContent(false);
  return (
    <main>
      <Loader {...{ isLoaded, isError }} />
      <section className={isError ? 'main-hidden' : isLoaded ? 'main-content' : 'main-hidden'}>
        <Search {...{ window: getWindowContent, list: getListContent, content }} />
        {content ? <Content arrayList={arrayListBooks} /> : <ContentList arrayList={arrayListBooks} />}
      </section>
    </main>
  );
};
