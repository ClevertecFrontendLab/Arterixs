import { FormEvent } from 'react';
import { propsInputSearch } from '../../types/types';

export const InputSearch = (props: propsInputSearch) => {
  const {setInput} = props
  const setInputValue = (event: FormEvent) => {
    if (event.target instanceof HTMLInputElement) {
      setInput(event.target.value)
    }
  }
  return (
    <div className='wrappper-search _open'>
      <svg className='search-icon'>
        <use href='#loop' />
      </svg>
      <input
        type='text'
        className='form-search__search'
        placeholder='Поиск книги или автора...'
        data-test-id='input-search'
        onInput={setInputValue}
      />
    </div>
  );
}
