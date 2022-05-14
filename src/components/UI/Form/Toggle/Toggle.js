import { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export const Toggle = ({
  name,
  label = 'Toggle',
  checked = false,
  disabled = false,
  onClick = () => {},
  className,
  ...rest
}) => {
  const classes = clsx(
    'w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600',
    { 'opacity-50 dark:opacity-50': disabled },
    className
  )

  const [state, setState] = useState(checked)

  const toggle = evt => {
    setState(!state)
  }
  return (
    <>
      <label
        htmlFor={name}
        className='flex relative items-center cursor-pointer'
        onClick={() => {
          toggle()
          onClick()
        }}
      >
        <input
          type='checkbox'
          id={name}
          className='sr-only'
          checked={state}
          disabled={!disabled}
        />
        <div className={classes} {...rest} />
        <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
          {label}
        </span>
      </label>
    </>
  )
}

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.any,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}
