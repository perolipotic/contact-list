import React from 'react';
import { Link } from 'react-router-dom'
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

const ContactCard = ({ person: { imageUrl, fullName, id, isFavourite } }) => {
  return (
    <div
      className='contact-card__item'>
      <CardHeader id={id} isFavourite={isFavourite} />
      <Link style={{ width: '100%' }} to={`contact/${id}`}>
        <div className='contact-card__body'>
          <CardImage imageUrl={imageUrl} />
          <CardTitle fullName={fullName} />
        </div>
      </Link>
    </div>
  )
}

export default ContactCard