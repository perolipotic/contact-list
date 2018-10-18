import React from 'react'
import { Subscribe } from 'unstated';
import ContactsContainer from '../unstated/ContactsContainer';
import Button from './Buttons'


const Modal = ({ isOpen }) => {
  return (
    <Subscribe to={[ContactsContainer]}>
      {({ closeModal, state: { contacts, deleteID }, deleteContact }) =>
        <React.Fragment>
          {isOpen && <div className="modal--wrapper">
            <div className="modal--container">
              <p className="modal-title">Delete</p>
              <div className="modal--body">
                <div className="modal-message">
                  Are you sure you want to delete this contact?</div>
                <div className="btn--wrapper modal-buttons">
                  <div onClick={() => closeModal()}>
                    <Button value={'Cancel'} type={'reset'} label={'Cancel'}>
                    </Button>
                  </div>
                  <Button onClick={async () => {
                    await deleteContact(contacts, deleteID)
                    window.location.href = '/';
                  }} value={'Delete'} label={'Delete'} ></Button>
                </div></div>

            </div>
          </div>}
        </React.Fragment>}

    </Subscribe>
  )
}
export default Modal
