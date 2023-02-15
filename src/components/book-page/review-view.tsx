import { IJsonData } from '../../types/interface';
import { Ratio } from './ratio';
import { RatioEmpty } from './ratio-empty';
import { MetaInfo } from './meta-info';
import { Recall } from './recall';
import { RecallEmpty } from './recall-empty';

export const ReviewView = (props: IJsonData) => {
  const recall = props.grade;
  return (
    <section className='body-books-page'>
      {props.grade ? <Ratio /> : <RatioEmpty />}
      <MetaInfo {...props.meta} key={props.id} />
      {recall ? <Recall {...props.review} key={props.id + 2} /> : <RecallEmpty />}
    </section>
  );
};
