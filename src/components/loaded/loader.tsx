import Lottie from 'lottie-react';
import loaderAnimation from '../../assets/loader/loader.json'
import { IControlLoadedResponse } from '../../types/interface';


export const Loader = (props: IControlLoadedResponse) => {
  const {isLoaded, isError} = props
  return (
    <div className={isError ? 'blur-wrap blur-wrap_hidden' : (isLoaded ? 'blur-wrap blur-wrap_hidden' : 'blur-wrap')} data-test-id='loader'>
      <Lottie animationData={loaderAnimation} loop={isError ? false : (isLoaded ? false : true)} />
    </div>
  )
};
