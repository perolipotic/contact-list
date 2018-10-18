import React from 'react'
import { Link } from 'react-router-dom'
import { Subscribe } from 'unstated'
import Icon from '../Icon'
import ContactsContainer from '../../unstated/ContactsContainer';

export default ({ id, isFavourite }) => (
  <div className='contact-card__header'>
    <i className='contact-card__icon'>
      <Subscribe to={[ContactsContainer]}>
        {({ toggleFavourite }) => (
          <Icon
            onClick={() => toggleFavourite(id)}
            icon={isFavourite ? 'favourite' : 'notFavourite'}
            sizeBox='15px'
          />
        )}
      </Subscribe>

    </i>
    <div className='contact-card--show-on-hover'>
      <i className='contact-card__icon'>
        <Link to={`/contact/edit/${id}`}>
          <Icon icon='edit' sizeBox='15px'></Icon>
        </Link>
      </i>
      <i className='contact-card__icon'>
        <Subscribe to={[ContactsContainer]}>{({ openModal }) => (<Icon
          onClick={() => openModal(id)}
          icon='trash' sizeBox='15px'></Icon>)}
        </Subscribe>
      </i>
    </div>
  </div>
)
