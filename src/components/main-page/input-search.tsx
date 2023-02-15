export const InputSearch = () => (
  <div className='wrappper-search _open'>
    <svg className='search-icon'>
      <use href='#loop' />
    </svg>
    <input
      type='text'
      className='form-search__search'
      placeholder='Поиск книги или автора...'
      data-test-id='input-search'
    />
  </div>
);
