import { Link } from 'react-router-dom';
import { IObjecrCard } from '../../types/interface';

export const CardList = (props: IObjecrCard) => {
  const { content, disabled, className } = props.button;
  return (
    <article data-test-id='card'>
      <Link to={`/books/:category/:${props.id}`} className='book__list'>
        {props.img}
        <div className='book__content-wrapper'>
          <section className='book__list_name'>
            <h2 className='book__list_title'>{props.name}</h2>
          </section>
          <section className='wrapper-author_list'>
            <h3 className='book__list_author'>{props.author}</h3>
          </section>
          <div className='book__list_grade'>
            {props.grade}
            <button className={className} disabled={disabled} type='button'>
              <span className='text'>{content}</span>
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};
