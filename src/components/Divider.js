import React from 'react'
import PropTypes from 'prop-types'


const Divider = ({ green }) => {
  return (
    <div
      className={
        `divider divider--${green ? 'green' : 'gray'}`
      }></div>
  )
}
Divider.propTypes = {
  green: PropTypes.bool,
}
export default Divider