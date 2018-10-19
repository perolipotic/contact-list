import React from 'react'
import PropTypes from 'prop-types'

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

ContactImage.propTypes = {
  current: PropTypes.object,
  showForm: PropTypes.bool,
}
export default ContactImage