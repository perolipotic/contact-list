import React from 'react'
import PropTypes from 'prop-types'


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
CardImage.propTypes = {
  imageUrl: PropTypes.string,
}

export default CardImage
