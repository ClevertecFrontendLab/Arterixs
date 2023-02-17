import { ISearchBut } from '../../types/interface';

export const ButtonRatio = (props: ISearchBut) => (
  <button
    className={!props.state ? 'form-search__button' : 'search-hidden'}
    type='button'
    data-test-id={props.icon === '#loop' ? 'button-search-open' : ''}
    onClick={props.func}
  >
    <div className='block-button__search'>
      <svg className='search-rating'>
        <use href={props.icon} />
      </svg>
      <span className='block-button_span'>По рейтингу</span>
    </div>
  </button>
);
