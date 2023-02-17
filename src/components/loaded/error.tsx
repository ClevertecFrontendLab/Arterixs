import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../store/hooks/use-typed-selector';
import { ERROR_TEXT } from '../../utils/constants';

export const ErrorLoad = () => {
  const isActiveLink = useParams()
  const isError = useTypedSelector((state) => state.loadMainPage.errorLoadCategory || state.loadMainPage.errorLoadList || state.loadBookPage.errorIdBook)
  const isErrorMain = useTypedSelector((state) => state.loadMainPage.errorLoadCategory || state.loadMainPage.errorLoadList)
  return (
    <div className={isError ? ( isActiveLink.category ? (isActiveLink.id ? 'error-wrap' : (isErrorMain ? 'error-wrap' : 'error-wpap_hidden')) : 'error-wrap error-wpap_hidden') : 'error-wrap error-wpap_hidden'}
      data-test-id='error'
    >
      <div className='error-content-wrap'>
        <div className="error-content">
          <svg className='error__content-svg'>
            <use href='#error' />
          </svg>
          <p className="error__content-text">{ERROR_TEXT}</p>
        </div>
        <button type="button" className='error-button'>
          <span className='error-button__span-left' />
          <span className='error-button__span-right' />
        </button>
      </div>
    </div>
  )
};
