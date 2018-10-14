import React from 'react'

const pickStyle = (label) => {
  switch (label) {
    case 'Save':
      return 'btn--success'
    case 'Cancel':
      return 'btn--cancel'
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

export default Button;