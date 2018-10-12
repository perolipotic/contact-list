import React from 'react'

const CardImage = ({ imageUrl }) => {
  return (
    <div className="contact-card__image"
      style={{ backgroundImage: `url(${imageUrl})` }} />
  )
}

export default CardImage
