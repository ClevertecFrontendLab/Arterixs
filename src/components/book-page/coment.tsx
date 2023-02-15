import { IReview } from '../../types/interface';
import avaComment from '../../assets/image/webp/ava-rev.webp';
import { StarsFull } from './stars-full';

export const Comment = (props: IReview) => (
  <article className='card-comment'>
    <section className='head-comment'>
      <img src={`${avaComment}`} alt='avatar' className='avatar-comment' />
      <div className='wrapper-data-comment'>
        <h4 className='title-comment'>{props.name}</h4>
        <p className='date-comment'>{props.date}</p>
      </div>
    </section>
    <StarsFull />
    {props.comment ? <p className='content-comment'>{props.comment}</p> : false}
  </article>
);
