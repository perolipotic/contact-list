import React from 'react'
import Icon from '../Icon'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const CardNew = ({ contacts, newID }) => {

  return (
    <Link to={`contact/add/${newID(contacts)}`} className='contact-card__item contact-card__item--new'>
      <Icon icon='plus' sizeBox='15px' />
      <p className="contact-card--new-title">Add new </p>
    </Link>
  )
}
CardNew.propTypes = {
  contacts: PropTypes.array,
  newID: PropTypes.func,
}
export default CardNew;
