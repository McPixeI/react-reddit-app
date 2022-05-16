import clsx from 'clsx'
import PropTypes from 'prop-types'
import fallbackImg from '../../../assets/img/notFoundImg.jpg'

export const Image = ({
  src,
  alt,
  className,
  ...rest
}) => {
  const classes = clsx('block w-full object-cover', className)

  const handleError = (evt) => {
    const target = evt.currentTarget
    target.src = fallbackImg || ''
    target.alt = 'fallback'
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={classes}
      {...rest}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
}
