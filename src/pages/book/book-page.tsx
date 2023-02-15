import { useParams } from 'react-router-dom';
import { BookView } from '../../components/book-page/book-view';
import { NavList } from '../../components/book-page/nav-list';
import { ReviewView } from '../../components/book-page/review-view';
import { arrDataPageBooks } from '../../utils/data-page-books';

const getValidIdUrl = (value: string | undefined): number => (value ? Number(value.slice(1)) : 0);

export const BookPage = () => {
  const params = useParams();
  const id = getValidIdUrl(params.id);
  const data = arrDataPageBooks[id - 1];

  return (
    <main className='main-book-page'>
      <div className='main-navigation-books-page'>
        <NavList />
      </div>
      <div className='main-wrap-book-page'>
        <div className='wrapper-book-page'>
          <BookView {...data} key={data.id + 1} />
          <ReviewView {...data} key={data.id} />
        </div>
      </div>
    </main>
  );
};
