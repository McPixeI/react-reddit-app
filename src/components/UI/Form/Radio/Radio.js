import clsx from 'clsx'
import PropTypes from 'prop-types'

export const Radio = ({
  value,
  selected,
  onChange = () => {},
  className
}) => {
  const classes = clsx('flex items-center mb-4', className)
  return (
    <div className={classes}>
      <input
        id={value}
        type='radio'
        value={value}
        checked={value === selected}
        onChange={onChange}
        className='w-4 h-4 cursor-pointer border-gray-300 focus:ring-2 focus:text-primary/60 dark:focus:ring-text-primary dark:focus:text-primary dark:bg-gray-700 dark:border-gray-600'
      />
      <label
        htmlFor={value}
        className='cursor-pointer block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {value}
      </label>
    </div>
  )
}

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  selected: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
}
