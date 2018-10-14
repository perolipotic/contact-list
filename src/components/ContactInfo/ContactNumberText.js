import React from 'react'
import Icon from '../Icon';

const ContactNumberText = () => {
  return (
    <div className="contact-number">
      <div className="contact-number__icon">
        <Icon icon="phone" sizeBox="15px" />
        <span className="contact-number--green">number</span>
      </div>
      <div className="contact-number__label">
        <div className="contact-number__text">
          <p className="contact-number--location">HOME</p>
          <p className="contact-number--tel">+385 21 235 120</p>
        </div>
        <div className="contact-number__text">
          <p className="contact-number--location">HOME</p>
          <p className="contact-number--tel">+385 21 235 120</p>
        </div>

      </div>
    </div>
  )
}

export default ContactNumberText;
