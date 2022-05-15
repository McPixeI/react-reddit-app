import clsx from 'clsx'

export const AppContainer = ({ children, className }) => {
  const classes = clsx('container mx-auto px-4 my-8 mt-14 sm:mt-10 md:mt-20', className)
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
