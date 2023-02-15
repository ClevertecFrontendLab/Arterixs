import { cardContentArray } from '../../utils/data';
import { CardList } from './card-list';

export const ContentList = () => (
  <section className='wrapper-content-list'>
    {cardContentArray.map((item) => (
      <CardList {...item} key={item.id} />
    ))}
  </section>
);
