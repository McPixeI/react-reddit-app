import clsx from 'clsx'
import PropTypes from 'prop-types'

export const Badge = ({
  children,
  variant = 'primary',
  className
}) => {
  const classes = clsx(
    'inline-flex text-sm font-medium mr-2 px-2.5 py-0.5 rounded-sm',
    { 'bg-primary text-white dark:bg-primary/50 dark:text-indigo-100': variant === 'primary' },
    { 'bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-300': variant === 'secondary' },
    className
  )
  return (
    <span className={classes}>{children}</span>
  )
}

Badge.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(['primary', 'secondary'])
}
