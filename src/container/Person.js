import React from 'react';
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'


import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


import ContactImage from '../components/ContactInfo/ContactImage';
import ContactHeader from '../components/ContactInfo/ContactHeader';
import ContactEmailText from '../components/ContactInfo/ContactEmailText';
import ContactNumberText from '../components/ContactInfo/ContactNumberText';
import Button from '../components/Buttons';

import NameField from '../components/FormParts/NameField';
import EmailField from '../components/FormParts/EmailField';
import NumberFields from '../components/FormParts/NumberFields';
import UploadPhoto from '../components/FormParts/UploadPhoto';


class Person extends React.Component {

  onSubmit = (values) => {
    const { history: { location: { pathname } }, contacts, history } = this.props
    let edit = pathname.includes('edit') || false
    const _id = pathname.slice(-1)[0]
    !edit && this.props.addNewContact(contacts, { ...values })
    edit && this.props.updateContact(contacts, { ...values }, _id)
    history.push('/')
  }

  render() {

    const { contacts, match: { path, url }, newID, deleteContact } = this.props;

    let current = {}
    const _id = url.slice(-1)[0]

    contacts.map(contact => {

      if (contact.id === parseInt(_id)) {
        current = contact
      }
      if (Object.keys(current).length === 0) {
        current = {
          id: newID(contacts),
          isFavourite: false,
          phoneNumbers: [{

          }]
        }
      }
      return current
    })
    let showForm = path.includes('edit') || path.includes('add')
    let edit = path.includes('edit')
    let view = path.includes('contact')

    return (
      <div className='contact-info'>
        <div className="contact-info__wrapper extended-line--green">
          <ContactImage
            showForm={showForm}
            current={current} />
          <ContactHeader
            view={view}
            edit={edit}
            contacts={contacts}
            deleteContact={deleteContact}
            showName={showForm}
            current={current} />
        </div>
        <div className={`contact-info__body ${showForm ? 'contact-info__layout' : ''}`}>
          {!showForm &&
            <React.Fragment>
              <ContactEmailText email={current.email} />
              <ContactNumberText phoneNumbers={current.phoneNumbers} />
            </React.Fragment>}

          {showForm && <Form
            mutators={{
              ...arrayMutators
            }}
            onSubmit={this.onSubmit}
            initialValues={current}
            render={({
              state,
              handleSubmit,
              form: { mutators: { pop, push } },
              submitting,
              pristine,
              values }) => (
                <form
                  onSubmit={handleSubmit}>
                  <UploadPhoto current={current} {...current.imageUrl} />
                  <NameField {...current.fullName}></NameField>
                  <EmailField {...current.email}></EmailField>
                  <NumberFields pop={pop} push={push}></NumberFields>
                  <div className="btn--wrapper">
                    <Link to={"/"}>
                      <Button value={'Cancel'} type={'reset'} label={'Cancel'}>
                      </Button>
                    </Link>
                    <Button value={'Save'} label={'Save'} ></Button>
                  </div>
                </form>

              )}
          />}
        </div>
      </div>
    )
  }

}
export default withRouter(Person);