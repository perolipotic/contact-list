import React from 'react';
import ContactImage from '../components/ContactImage';
import ContactHeader from '../components/ContactHeader';
import ContactEmailText from '../components/ContactEmailText';
import ContactNumberText from '../components/ContactNumberText';

const EditContact = () => {
  return (
    <div className='contact-info'>
      <div className="contact-info__wrapper">
        <ContactImage />
        <ContactHeader />
      </div>
      <div className="contact-info__body">
        <ContactEmailText />
        <ContactNumberText />
      </div>
    </div>
  )
}
export default EditContact;