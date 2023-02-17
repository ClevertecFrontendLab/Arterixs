import { Link } from 'react-router-dom';
import { IListBooks } from '../../types/interface';
import { CLASSNAME_BUTTON_BOOK, CLASSNAME_BUTTON_BOOKED } from '../../utils/constants';
import { convertUrlPath, getAuthorString, getContentButtonCardBooks } from '../../utils/helpers';
import { EmptyCard } from './empty-card';
import { FullCard } from './full-card';
import { Grades } from './grades';
import { Stars } from './stars';

export const CardList = (props: IListBooks) => {
  const { rating, title, id, authors, image, booking, delivery, categories } = props;
  const author = getAuthorString(authors);
  const contentButton = getContentButtonCardBooks(booking, delivery);
  const pathUrl = convertUrlPath(categories[0]);
  return (
    <article data-test-id='card'>
      <Link to={`/books/${pathUrl}/${id}`} className='book__list'>
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
