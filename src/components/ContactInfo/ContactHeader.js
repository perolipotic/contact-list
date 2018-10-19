import React from 'react';
import { Link } from 'react-router-dom'
import Icon from '../Icon';
import { withRouter } from 'react-router';
import { Subscribe } from 'unstated';
import PropTypes from 'prop-types'

import ContactsContainer from '../../unstated/ContactsContainer';

const ContactHeader = ({
  showName,
  edit,
  view,
  current: { id, isFavourite, fullName },
}) => {
  return (
    <div className="contact-info__header__wrapper">
      <div className="contact-info__header">
        <div className="contact-info--label">
          <i className="contact-info__icon">
            <Link to={"/"}>
              <Icon icon="back" sizeBox="20px" />
            </Link>
          </i>
          <p className="contact-info__title">{!showName && fullName}</p>
        </div>
        {edit && <div className="contact-info--icons">


          <Subscribe to={[ContactsContainer]}>{({ openModal }) => (
            <i onClick={() => openModal(id)} className="contact-info__icon">
              <span className="contact-info__icon-text">Delete</span>
              <Icon icon='trash' sizeBox='15px'></Icon>
            </i>)}
          </Subscribe>


        </div>}
        {!showName && view && <div className="contact-info--icons">
          <i className="contact-info__icon">
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
          <i className="contact-info__icon">
            <Link to={`edit/${id}`}>
              <Icon icon='edit' sizeBox='15px'></Icon>
            </Link>
          </i>
        </div>}
      </div>
    </div>
  )
}
ContactHeader.propTypes = {
  current: PropTypes.object,
  showName: PropTypes.bool,
  edit: PropTypes.bool,
  view: PropTypes.bool,
}

export default withRouter(ContactHeader)