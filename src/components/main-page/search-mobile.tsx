import { FormEvent } from 'react';
import { propsInputMoblieSearch } from '../../types/types';
import { ButtonClosed } from './button-closed';

export const SearchMobile = (props: propsInputMoblieSearch) => {
  const {setInput, state} = props
  const setInputValue = (event: FormEvent) => {
    if (event.target instanceof HTMLInputElement) {
      setInput(event.target.value)
    }
  }
  return (
    <div className={state ? 'wrappper-mobile-search' : 'search-hidden'}>
      <input
        type='text'
        className='form-mobile-input__search'
        placeholder='Поиск книги или автора...'
        data-test-id='input-search'
        onInput={setInputValue}
      />
      <ButtonClosed {...props} />
    </div>
  );
}
