import React from 'react'
import Icon from '../Icon'

const CardHeader = () => {
  return (
    <div className='contact-card__header'>
      <i className='contact-card__icon'>
        <Icon icon='favourite' sizeBox='15px'></Icon>
      </i>
      <div className='contact-card--show-on-hover'>
        <i className='contact-card__icon'>
          <Icon icon='edit' sizeBox='15px'></Icon>
        </i>
        <i className='contact-card__icon'>
          <Icon icon='trash' sizeBox='15px'></Icon>
        </i>
      </div>
    </div>
  )
}
export default CardHeader