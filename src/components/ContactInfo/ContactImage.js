import React from 'react'
const ContactImage = ({ current: { fullName, imageUrl }, showForm }) => {
  return (
    <React.Fragment>
      {!showForm && <div className="contact-image__wrapper">
        <div className='contact-image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }} >
        </div>
        <div className="contact-image--title">
          {fullName}</div>
      </div>}
    </React.Fragment>
  )
}
export default ContactImage