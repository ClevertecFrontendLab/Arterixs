import { ISwiperData } from '../../types/interface';
import { Slider } from '../swiper/swiper';

export const CoverBook = (props: ISwiperData) => {
  const { amountSlider, coverArray } = props;
  return (
    <div className='wrapper-img-books'>
      {amountSlider > 1 ? (
        <Slider image={coverArray} key={1} />
      ) : (
        <img src={`${coverArray[0]}`} alt='cover-books' className='head-book-page__image' />
      )}
    </div>
  );
};
