import React from 'react';
import { Link } from 'react-router-dom'
import Icon from './Icon';
import ContactEmailText from '../components/ContactEmailText';
import ContactNumberText from '../components/ContactNumberText';
import Divider from './Divider'

const ContactHeader = () => {
  return (
    <div className="contact-info__header__wrapper">
      <div className="contact-info__header">
        <div className="contact-info--left">
          <i className="contact-info__icon">
            <Link to={"/"}>
              <Icon icon="back" sizeBox="20px" />
            </Link>
          </i>
          <p className="contact-info__title">Addie Hernandez</p>
        </div>
        <div className="contact-info--right">
          <i className="contact-info__icon">
            <Icon icon='favourite' sizeBox='15px'></Icon>
          </i>
          <i className="contact-info__icon">
            <Icon icon='trash' sizeBox='15px'></Icon>
          </i>
        </div>
      </div>
      <Divider green></Divider>
      <div className="contact-info__body">
        <ContactEmailText />
        <ContactNumberText />
      </div>
    </div>
  )
}

export default ContactHeader