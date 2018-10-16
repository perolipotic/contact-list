import React from 'react'

const pickStyle = (imageUrl) => {
  if (imageUrl === undefined) {
    return '#abd9dd'
  }
  else {
    return `url(${imageUrl})`
  }
}
const CardImage = ({ imageUrl }) => {
  return (
    <div className="contact-card__image"
      style={{
        backgroundImage: pickStyle(imageUrl),
        backgroundColor: pickStyle(imageUrl)

      }} />
  )
}

export default CardImage
