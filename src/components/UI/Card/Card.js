import PropTypes from 'prop-types'
import clsx from 'clsx'

function Card ({
  children,
  link,
  className,
  ...props
}) {
  const classes = clsx(
    'flex flex-col bg-white rounded-md border shadow-md md:flex-row dark:border-gray-700 dark:bg-gray-800 ',
    className
  )
  return (
    <div className={classes} {...props}>
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
