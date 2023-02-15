import { useState} from 'react';
import { useSelector } from 'react-redux';

import { Search } from '../../components/main-page/search';
import { Content } from '../../components/main-page/content';
import { ContentList } from '../../components/main-page/content-list';
import { IINititalState } from '../../types/interface';


export const MainPage = () => {
  const isLoaded = useSelector((state: IINititalState) => state.loadedCategory && state.loadedList)
  const [content, setContent] = useState(true)
  const getWindowContent = () => setContent(true)
  const getListContent = () => setContent(false)
  return (
    <main className={isLoaded ? 'main-content' : 'main-hidden'}>
        <Search {...{window: getWindowContent, list: getListContent, content}} />
        {content ? <Content /> : <ContentList />}
    </main>
  )
}
