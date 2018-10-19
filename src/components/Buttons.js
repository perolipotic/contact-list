import React from 'react'

import PropTypes from 'prop-types'


const pickStyle = (label) => {
  switch (label) {
    case 'Save':
      return 'btn--success'
    case 'Cancel':
      return 'btn--cancel'
    case 'Delete':
      return 'btn--success'
    default:
      return ''
  }
}

const Button = ({
  onClick,
  disabled,
  value,
  type,
  label,

}) => {
  return (
    <button
      className={`btn ${pickStyle(label)}`}
      onClick={onClick}
      disabled={disabled}
      value={value}
      type={type}
    >{label}</button>
  )
}
Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
}

export default Button;