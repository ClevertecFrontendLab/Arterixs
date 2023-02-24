import { NO_BOOKS_IN_CATEGORY, NO_BOOKS_IN_SEARCH } from '../../utils/constants';

export const NoContent = (props: {flag: number, search: string}) => {
  const {flag, search} = props
  return (
  <div className={flag ? 'wrapper-error-content no-content_hidden' : 'wrapper-error-content'}>
    <p className="no-content">{search ? NO_BOOKS_IN_SEARCH : NO_BOOKS_IN_CATEGORY}</p>
  </div>
  )
};
