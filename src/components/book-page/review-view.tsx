import { IDataIdBook } from '../../types/interface';
import { Ratio } from './ratio';
import { RatioEmpty } from './ratio-empty';
import { MetaInfo } from './meta-info';
import { Recall } from './recall';
import { RecallEmpty } from './recall-empty';

export const ReviewView = (props: IDataIdBook) => {
  const { rating, id, comments } = props;
  const { issueYear, publish, pages, cover, weight, format, ISBN, producer, categories } = props;
  return (
    <section className='body-books-page'>
      {rating ? <Ratio rating={rating} /> : <RatioEmpty />}
      <MetaInfo {...{ issueYear, publish, pages, cover, weight, format, ISBN, producer, categories }} key={1} />
      {rating ? <Recall coments={comments} key={id} /> : <RecallEmpty />}
    </section>
  );
};
