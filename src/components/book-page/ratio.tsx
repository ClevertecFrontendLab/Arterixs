import { StarsFull } from './stars-full';

export const Ratio = () => (
  <section className='ratio-block'>
    <h3 className='ratio-block__ratio'>Рейтинг</h3>
    <div className='stars-block'>
      <StarsFull />
      <p className='ratio-full'>4.3</p>
    </div>
  </section>
);
