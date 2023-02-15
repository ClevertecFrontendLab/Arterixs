import { useState } from 'react';
import { ButtonRecall } from './button-recall';

export const RecallEmpty = () => {
  const [stateRecall, setRecall] = useState(false);
  const toggleStateRecall = () => setRecall(!stateRecall);
  return (
    <section className='review-block-empty'>
      <section className={stateRecall ? 'meta-info-title-block meta-info-title-block_active' : 'meta-info-title-block'}>
        <h3 className='ratio-block__ratio'>Отзывы</h3>
        <p className='count-comments'>0</p>
        <ButtonRecall {...{ toggleStateRecall, stateRecall }} />
      </section>
      <button className='meta-info__button meta-info__button_size' type='button'>
        <span className='button-content'>Оценить книгу</span>
      </button>
    </section>
  );
};
