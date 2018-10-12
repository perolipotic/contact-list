import React from 'react'

const CardTitle = ({ name, lastName }) => {
  return (
    <p className='contact-card__title'>
      {name} {lastName}
    </p>
  )
}

export default CardTitle
