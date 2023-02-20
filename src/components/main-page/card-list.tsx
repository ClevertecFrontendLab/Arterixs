import { Link } from 'react-router-dom';
import { IListBooks } from '../../types/interface';
import { cardProps } from '../../types/types';
import { CLASSNAME_BUTTON_BOOK, CLASSNAME_BUTTON_BOOKED } from '../../utils/constants';
import { getAuthorString, getContentButtonCardBooks } from '../../utils/helpers';
import { EmptyCard } from './empty-card';
import { FullCard } from './full-card';
import { Grades } from './grades';
import { Stars } from './stars';

export const CardList = (props: cardProps) => {
  const { rating, title, id, authors, image, booking, delivery, urlWay } = props;
  const author = getAuthorString(authors);
  const contentButton = getContentButtonCardBooks(booking, delivery);
  return (
    <article data-test-id='card'>
      <Link to={`/books/${urlWay}/${id}`} className='book__list'>
        {image ? <FullCard img={`https://strapi.cleverland.by${image.url}`} /> : <EmptyCard />}
        <div className='book__content-wrapper'>
          <section className='book__list_name'>
            <h2 className='book__list_title'>{title}</h2>
          </section>
          <section className='wrapper-author_list'>
            <h3 className='book__list_author'>{author}</h3>
          </section>
          <div className='book__list_grade'>
            {rating ? <Stars /> : <Grades />}
            <button
              className={
                booking ? (booking.order ? CLASSNAME_BUTTON_BOOKED : CLASSNAME_BUTTON_BOOK) : CLASSNAME_BUTTON_BOOK
              }
              disabled={delivery ? (delivery.handed ? true : false) : false}
              type='button'
            >
              <span className='text'>{contentButton}</span>
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};
