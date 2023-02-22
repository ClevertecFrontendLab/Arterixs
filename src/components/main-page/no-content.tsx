export const NoContent = (props: {flag: number}) => {
  const {flag} = props
  return (
  <div className={flag ? 'wrapper-error-content no-content_hidden' : 'wrapper-error-content'}>
    <p className="no-content">В этой категории книг ещё нет</p>
  </div>
  )
};
