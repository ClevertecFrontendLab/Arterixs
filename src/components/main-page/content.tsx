import { Card } from './card';
import { cardContentArray } from '../../utils/data';

export const Content = () => (
  <section className='wrapper-content'>
    {cardContentArray.map((item) => (
      <Card {...item} key={item.id} />
    ))}
  </section>
);
