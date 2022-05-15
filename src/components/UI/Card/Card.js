import PropTypes from 'prop-types'
import clsx from 'clsx'

function Card ({ children, link, className }) {
  const classes = clsx(
    'flex flex-col bg-white rounded-md border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700',
    className
  )
  return (
    <div className={classes}>
      {link ? <a href={link}>{children}</a> : <>{children}</>}
    </div>
  )
}

function CardHeading ({ children, className }) {
  return <div className={className}>{children}</div>
}

function CardBody ({ children, className }) {
  return <div className={`px-4 py-5 ${className}`}>{children}</div>
}

export { Card, CardHeading, CardBody }

Card.propTypes = {
  children: PropTypes.any,
  link: PropTypes.string,
  className: PropTypes.string
}
