import React from 'react'
import PropTypes from 'prop-types'


const CardTitle = ({ fullName }) => {
  return (
    <p className='contact-card__title'>
      {fullName}
    </p>
  )
}
CardTitle.propTypes = {
  fullName: PropTypes.string,
}

export default CardTitle
