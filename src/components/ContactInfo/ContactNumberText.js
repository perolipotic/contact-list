import React from 'react'
import Icon from '../Icon';




const ContactNumberText = ({ label, number, phoneNumbers }) => {
  return (
    <div className="contact-number">
      <div className="contact-number__icon">
        <Icon icon="phone" sizeBox="15px" />
        <span className="contact-number--green">numbers</span>
      </div>
      <div className="contact-number__label">

        {phoneNumbers.length !== 0 && phoneNumbers.map((phoneNumber, index) =>
          <div key={index} className="contact-number__text">
            <p className="contact-number--location">{phoneNumber.label}</p>
            <p className="contact-number--tel">{phoneNumber.number}</p>
          </div>)}
        {(phoneNumbers.length === 0) && <div>There is no contacts available</div>}

      </div>
    </div>
  )
}

export default ContactNumberText;
