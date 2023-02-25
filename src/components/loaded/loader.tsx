import { IControlLoadedResponse } from '../../types/interface';

export const Loader = (props: IControlLoadedResponse) => {
  const { isLoaded, isError } = props;
  return (
    <div
      className={isError ? 'blur-wrap blur-wrap_hidden' : isLoaded ? 'blur-wrap blur-wrap_hidden' : 'blur-wrap'}
      data-test-id='loader'
    >
      <div
        className={
          isError
            ? 'preloader__circle preloader__circle_stop'
            : isLoaded
            ? 'preloader__circle preloader__circle_stop'
            : 'preloader__circle'
        }
      />
    </div>
  );
};
