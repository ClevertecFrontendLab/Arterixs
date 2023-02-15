import { IJsonData } from '../../types/interface';
import { CoverBook } from './cover-book';
import { CoverEmpty } from './cover-empty';

export const BookView = (props: IJsonData) => {
  const { content, disabled, className } = props.button;
  const { amountSlider, coverArray } = props;
  const { one, two } = props.content;
  const conditionRenderCheck = props.img && amountSlider > 1;
  return (
    <section className={conditionRenderCheck ? 'head-books-page' : 'head-books-page_single'}>
      {props.img ? <CoverBook {...{ amountSlider, coverArray }} /> : <CoverEmpty />}
      <section className='meta-info'>
        <h2 className='meta-info__books'>{props.name}</h2>
        <h3 className='meta-info__author'>{props.author}</h3>
        <button className={className} disabled={disabled} type='button'>
          <span className='button-content'>{content}</span>
        </button>
      </section>
      <section className={conditionRenderCheck ? 'description description_swip' : 'description'}>
        <h3 className='descriprion__name'>О книге</h3>
        <div className='descrtiption-content'>
          <p className='descr-one'>{one}</p>
          <p className='descr-one'>{two}</p>
        </div>
      </section>
    </section>
  );
};
