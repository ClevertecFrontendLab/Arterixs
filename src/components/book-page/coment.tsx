import { ICommentsMeta } from '../../types/interface';
import avaComment from '../../assets/image/webp/ava-rev.webp';
import { StarsFull } from './stars-full';
import { convertedDate } from '../../utils/helpers';

export const Comment = (props: ICommentsMeta) => {
  const { text, createdAt, user } = props;
  const date = convertedDate(createdAt);
  return (
    <article className='card-comment'>
      <section className='head-comment'>
        <img src={`${avaComment}`} alt='avatar' className='avatar-comment' />
        <div className='wrapper-data-comment'>
          <h4 className='title-comment'>{`${user.firstName} ${user.lastName}`}</h4>
          <p className='date-comment'>{date}</p>
        </div>
      </section>
      <StarsFull />
      {text ? <p className='content-comment'>{text}</p> : false}
    </article>
  );
};
