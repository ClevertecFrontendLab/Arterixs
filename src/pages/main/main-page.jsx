import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Search } from '../../components/main-page/search';
import { Content } from '../../components/main-page/content';
import { ContentList } from '../../components/main-page/content-list';


export const MainPage = () => {
  // const dispatch = useDispatch()
  // const cash = useSelector(state => state.cash)
  // console.log(cash)
  const [content, setContent] = useState(true)
  const getWindowContent = () => setContent(true)
  const getListContent = () => setContent(false)
  return (
    <main className='main-content'>
        <Search {...{window: getWindowContent, list: getListContent, content}} />
        {content ? <Content /> : <ContentList />}
    </main>
  )
}
