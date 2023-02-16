import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import loaderAnimation from '../../assets/loader/loader.json'
import { IINititalState } from '../../types/interface';


export const Loader = () => {
  const isLoaded = useSelector((state: IINititalState) => state.loadedCategory && state.loadedList)
  const isError = useSelector((state: IINititalState) => state.errorLoadCategory || state.errorLoadList)
  return (
    <div className={isError ? 'blur-wrap blur-wrap_hidden' : (isLoaded ? 'blur-wrap blur-wrap_hidden' : 'blur-wrap')} data-test-id='loader'>
      <Lottie animationData={loaderAnimation} loop={isError ? false : (isLoaded ? false : true)} />
    </div>
  )
};
