import { ISearchBut } from '../../types/interface';
import { ButtonClosed } from './button-closed';

export const SearchMobile = (props: ISearchBut) => (
  <div className={props.state ? 'wrappper-mobile-search' : 'search-hidden'}>
    <input
      type='text'
      className='form-mobile-input__search'
      placeholder='Поиск книги или автора...'
      data-test-id='input-search'
    />
    <ButtonClosed {...props} />
  </div>
);
