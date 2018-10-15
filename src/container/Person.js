import React from 'react';
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'


import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


import ContactImage from '../components/ContactInfo/ContactImage';
import ContactHeader from '../components/ContactInfo/ContactHeader';
import ContactEmailText from '../components/ContactInfo/ContactEmailText';
import ContactNumberText from '../components/ContactInfo/ContactNumberText';

import NameField from '../components/FormParts/NameField';
import EmailField from '../components/FormParts/EmailField';
import NumberFields from '../components/FormParts/NumberFields';
import Button from '../components/Buttons';


const onSubmit = (values) => {
  console.log(values)
}

class Person extends React.Component {
  state = {
    newContact: {}
  }
  render() {
    const { contacts, match: { path } } = this.props;
    const _id = window.location.pathname.slice(-1)[0]
    let current = {};
    contacts.map(contact => {

      if (contact.id === parseInt(_id)) {
        current = contact
      }
      return current
    })
    let showForm = path.includes('edit') || path.includes('add')
    let edit = path.includes('edit')
    let view = path.includes('contact')

    console.log(current)
    return (
      <div className='contact-info'>
        <div className="contact-info__wrapper extended-line--green">
          <ContactImage
            imageUrl={current.imageUrl}
            fullName={current.fullName} />
          <ContactHeader
            view={view}
            edit={edit}
            showName={showForm}
            fullName={current.fullName} />
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
            onSubmit={onSubmit}
            initialValues={showForm ? current : this.state.newContact}
            render={({
              state,
              handleSubmit,
              mutators: { push, pop },
              form,
              submitting,
              pristine,
              values }) => (
                <form
                  onSubmit={handleSubmit}>
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