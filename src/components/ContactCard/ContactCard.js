import React from 'react';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

const ContactCard = ({ person: { imageUrl, name, lastName, id, isFavourite } }) => {
  return (
    <div className='contact-card__item'>
      <CardHeader id={id} isFavourite={isFavourite} />
      <div className='contact-card__body'>
        <CardImage imageUrl={imageUrl} />
        <CardTitle name={name} lastName={lastName} />
      </div>
    </div>
  )
}

export default ContactCard