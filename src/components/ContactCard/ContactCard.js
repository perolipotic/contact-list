import React from 'react';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

const ContactCard = () => {
  return (
    <div className='contact-card__item'>
      <CardHeader />
      <div className='contact-card__body'>
        <CardImage />
        <CardTitle />
      </div>

    </div>
  )
}

export default ContactCard