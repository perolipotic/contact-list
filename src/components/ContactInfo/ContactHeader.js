import React from 'react';
import { Link } from 'react-router-dom'
import Icon from '../Icon';

const ContactHeader = ({ firstName, lastName }) => {
  return (
    <div className="contact-info__header__wrapper">
      <div className="contact-info__header">
        <div className="contact-info--label">
          <i className="contact-info__icon">
            <Link to={"/"}>
              <Icon icon="back" sizeBox="20px" />
            </Link>
          </i>
          <p className="contact-info__title">{firstName} {lastName}</p>
        </div>
        <div className="contact-info--icons">
          <i className="contact-info__icon">
            <Icon icon='favourite' sizeBox='15px'></Icon>
          </i>
          <i className="contact-info__icon">
            <Icon icon='trash' sizeBox='15px'></Icon>
          </i>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader