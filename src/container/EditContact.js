import React from 'react';
import ContactImage from '../components/ContactImage';
import ContactHeader from '../components/ContactHeader';

const EditContact = () => {
  return (
    <div className='contact-info'>
      <div className="contact-info__wrapper">
        <ContactImage />
        <ContactHeader />
      </div>
    </div>
  )
}
export default EditContact;