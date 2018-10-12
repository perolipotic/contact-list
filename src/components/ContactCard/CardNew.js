import React from 'react'
import Icon from '../Icon'

const CardNew = () => {
  return (
    <div className='contact-card__item contact-card__item--new'>
      <Icon icon='plus' sizeBox='15px' />
      <p className="contact-card--new-title">Add new</p>
    </div>
  )
}

export default CardNew;
