import React from 'react'
import Icon from '../Icon';

const ContactEmailText = ({ email }) => {
  return (
    <div className="contact-email">
      <div className="contact-email__icon">
        <Icon icon="email" sizeBox="15px" />
        <span className="contact-email--green">email</span>
      </div>
      <p className="contact-email__label">{email}</p>
    </div>
  )
}
//label detals
export default ContactEmailText;
