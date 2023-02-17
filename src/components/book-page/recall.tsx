import { useState } from 'react';
import { ICommentsMeta } from '../../types/interface';
import { ButtonRecall } from './button-recall';
import { Comment } from './coment';

export const Recall = (props: { coments: ICommentsMeta[] }) => {
  const { coments } = props;
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
        <p className='count-comments'>{coments.length}</p>
        <ButtonRecall {...{ toggleStateRecall, stateRecall }} />
      </section>
      <section className={stateRecall ? 'comments' : 'comments comments_closed'}>
        {coments.map((item) => (
          <Comment {...item} key={item.id} />
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
