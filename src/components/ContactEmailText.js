import React from 'react'
import Icon from './Icon';

const ContactEmailText = () => {
  return (
    <div className="contact-email">
      <div className="contact-email__left">
        <Icon icon="email" sizeBox="15px" />
        <span className="contact-email--green">email</span>
      </div>
      <p className="contact-email__right">addie.hernandet@gmail.com</p>
    </div>
  )
}

export default ContactEmailText;
