import { useState } from 'react';
import { IReviewer } from '../../types/interface';
import { ButtonRecall } from './button-recall';
import { Comment } from './coment';

export const Recall = (props: IReviewer) => {
  const keys = Object.entries(props);
  const [stateRecall, setRecall] = useState(false);
  const toggleStateRecall = () => setRecall(!stateRecall);
  return (
    <section className={stateRecall ? 'review-block' : 'review-block review-block_closed'}>
      <section
        className={
          !stateRecall
            ? 'meta-info-title-block meta-info-title-block_closed'
            : 'meta-info-title-block meta-info-title-block_active'
        }
      >
        <h3 className='ratio-block__ratio'>Отзывы</h3>
        <p className='count-comments'>2</p>
        <ButtonRecall {...{ toggleStateRecall, stateRecall }} />
      </section>
      <section className={stateRecall ? 'comments' : 'comments comments_closed'}>
        {keys.map((item) => (
          <Comment {...item[1]} key={item[0]} />
        ))}
      </section>
      <button
        className='meta-info__button meta-info__button_size meta-info__button_size_recall'
        type='button'
        data-test-id='button-rating'
      >
        <span className='button-content'>Оценить книгу</span>
      </button>
    </section>
  );
};
