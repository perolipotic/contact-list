import React from 'react';
import ContactImage from '../components/ContactInfo/ContactImage';
import ContactHeader from '../components/ContactInfo/ContactHeader';
import ContactEmailText from '../components/ContactInfo/ContactEmailText'
import ContactNumberText from '../components/ContactInfo/ContactNumberText';

const Person = ({ edit }) => {
  return (
    <div className='contact-info'>
      <div className="contact-info__wrapper">
        <ContactImage />
        <ContactHeader />
      </div>
      <div className="contact-info__body">
        {!edit && <ContactEmailText />}
        {!edit && <ContactNumberText />}
      </div>
    </div>
  )
}
export default Person;