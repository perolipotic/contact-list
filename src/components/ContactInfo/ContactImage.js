import React from 'react'

const ContactImage = ({ fullName, imageUrl }) => {
  return (
    <div className="contact-image__wrapper">
      <div className='contact-image'
        style={{ backgroundImage: `url(${imageUrl})` }} >
      </div>
      <div className="contact-image--title">
        {fullName}</div>
    </div>
  )
}
export default ContactImage