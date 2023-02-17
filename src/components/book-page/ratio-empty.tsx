import { StarsEmpty } from './stars-empty';

export const RatioEmpty = () => (
  <section className='ratio-block'>
    <h3 className='ratio-block__ratio'>Рейтинг</h3>
    <div className='stars-block-empty'>
      <StarsEmpty />
      <p className='ratio-none'>Оценок ещё нет</p>
    </div>
  </section>
);
