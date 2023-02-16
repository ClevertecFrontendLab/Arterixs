import { useState} from 'react';
import { useSelector } from 'react-redux';

import { Search } from '../../components/main-page/search';
import { Content } from '../../components/main-page/content';
import { ContentList } from '../../components/main-page/content-list';
import { IINititalState } from '../../types/interface';


export const MainPage = () => {
  const isLoaded = useSelector((state: IINititalState) => state.loadedCategory && state.loadedList)
  const isError = useSelector((state: IINititalState) => state.errorLoadCategory || state.errorLoadList)
  const arrayListBooks = useSelector((state: IINititalState) => state.listBooks)
  const [content, setContent] = useState(true)
  const getWindowContent = () => setContent(true)
  const getListContent = () => setContent(false)
  return (
    <main className={isError ? 'main-hidden' : (isLoaded ? 'main-content' : 'main-hidden')}>
        <Search {...{window: getWindowContent, list: getListContent, content}} />
        {content ? <Content arrayList = {arrayListBooks} /> : <ContentList arrayList = {arrayListBooks}/>}
    </main>
  )
}
