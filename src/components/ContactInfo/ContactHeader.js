import React from 'react';
import { Link } from 'react-router-dom'
import Icon from '../Icon';
import { withRouter } from 'react-router';
import { Subscribe } from 'unstated';
import ContactsContainer from '../../unstated/ContactsContainer';

const ContactHeader = ({
  showName,
  contacts,
  edit,
  view,
  current: { id, isFavourite, fullName },
  deleteContact, history }) => {
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
          <i className="contact-info__icon">
            <Icon
              onClick={async () => {
                await deleteContact(contacts, id)
                history.push("/")
              }}
              icon='trash' sizeBox='15px'></Icon>
          </i>
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

export default withRouter(ContactHeader)