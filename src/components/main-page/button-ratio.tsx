import { ISearchBut } from '../../types/interface';

export const ButtonRatio = (props: ISearchBut) => {
  const {state, icon, func, stateSort} = props
  return (
    <button
      className={!state ? 'form-search__button' : 'search-hidden'}
      type='button'
      data-test-id={icon === '#loop' ? 'button-search-open' : ''}
      onClick={func}
    >
      <div className='block-button__search'>
        <svg className={stateSort ? 'search-rating search-rating_active' : 'search-rating'}>
          <use href={icon} />
        </svg>
        <span className='block-button_span'>По рейтингу</span>
      </div>
    </button>
  )
};
