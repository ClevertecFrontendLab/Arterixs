import { Link } from 'react-router-dom';
import { IObjecrCard } from '../../types/interface';

export const Card = (props: IObjecrCard) => {
  const { content, disabled, className } = props.button;
  return (
    <article data-test-id='card' className='card-books'>
      <Link to={`/books/:category/:${props.id}`} className='book'>
        {props.img}
        <div className='book__grade'>{props.grade}</div>
        <section className='book__name'>
          <h2 className='book__title'>{props.name}</h2>
        </section>
        <section className='wrapper-author'>
          <h3 className='book__author'>{props.author}</h3>
        </section>
        <button className={className} disabled={disabled} type='button'>
          <span className='text'>{content}</span>
        </button>
      </Link>
    </article>
  );
};
