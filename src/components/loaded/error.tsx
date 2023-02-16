import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IINititalState } from '../../types/interface';
import { ERROR_TEXT } from '../../utils/constants';

export const ErrorLoad = () => {
  const isActiveLink = useParams()
  const isError = useSelector((state: IINititalState) => state.errorLoadCategory || state.errorLoadList)
  return (
    <div className={isError ? ( isActiveLink.category ? 'error-wrap' : 'error-wrap error-wpap_hidden') : 'error-wrap error-wpap_hidden' }
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
