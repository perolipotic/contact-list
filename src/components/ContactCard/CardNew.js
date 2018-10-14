import React from 'react'
import Icon from '../Icon'
import { Link } from 'react-router-dom'

const CardNew = () => {
  return (
    <Link to={'/contact/add/'} className='contact-card__item contact-card__item--new'>
      <Icon icon='plus' sizeBox='15px' />
      <p className="contact-card--new-title">Add new</p>
    </Link>
  )
}

export default CardNew;
