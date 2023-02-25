import { IDataIdBook } from '../../types/interface';
import { CLASSNAME_META_BUTTON_BOOK, CLASSNAME_META_BUTTON_BOOKED } from '../../utils/constants';
import { converterBooksCover, getAuthorString, getContentButtonCardBooks } from '../../utils/helpers';
import { CoverBook } from './cover-book';
import { CoverEmpty } from './cover-empty';

export const BookView = (props: IDataIdBook) => {
  const { title, authors, booking, delivery, description, images } = props;
  const authorString = getAuthorString(authors);
  const contentButton = getContentButtonCardBooks(booking, delivery);
  const amountBooksCover = images ? converterBooksCover(images) : [];
  const amountSliderCovers = amountBooksCover.length;
  const conditionRenderCheck = images && amountSliderCovers > 1;
  return (
    <section className={conditionRenderCheck ? 'head-books-page' : 'head-books-page_single'}>
      {images ? <CoverBook {...{ amountSliderCovers, amountBooksCover }} /> : <CoverEmpty />}
      <section className='meta-info'>
        <h2 data-test-id='book-title' className='meta-info__books'>{title}</h2>
        <h3 className='meta-info__author'>{authorString}</h3>
        <button
          className={
            booking
              ? booking.order
                ? CLASSNAME_META_BUTTON_BOOKED
                : CLASSNAME_META_BUTTON_BOOK
              : CLASSNAME_META_BUTTON_BOOK
          }
          disabled={delivery?.handed}
          type='button'
        >
          <span className='button-content'>{contentButton}</span>
        </button>
      </section>
      <section className={conditionRenderCheck ? 'description description_swip' : 'description'}>
        <h3 className='descriprion__name'>О книге</h3>
        <div className='descrtiption-content'>
          <p className='descr-one'>{description}</p>
        </div>
      </section>
    </section>
  );
};
