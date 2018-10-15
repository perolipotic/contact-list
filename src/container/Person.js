import React, { Component } from 'react';
import { Form } from 'react-final-form'




import ContactImage from '../components/ContactInfo/ContactImage';
import ContactHeader from '../components/ContactInfo/ContactHeader';
import ContactEmailText from '../components/ContactInfo/ContactEmailText'
import ContactNumberText from '../components/ContactInfo/ContactNumberText';

import NameField from '../components/FormParts/NameField'
import EmailField from '../components/FormParts/EmailField'
import NumberFields from '../components/FormParts/NumberFields'
import Button from '../components/Buttons';


const onSubmit = (values) => {
  console.log({ newContact: values })
}

class Person extends React.Component {
  state = {
    newContact: { id: 1, firstName: 'larry', email: 'test' }
  }
  render() {
    const { edit, add, contacts } = this.props;
    const _id = window.location.pathname.slice(-1)[0]
    let current = {};
    contacts.map(contact => {

      if (contact.id === parseInt(_id)) {
        current = contact
      }
      return current
    })
    return (
      <div className='contact-info'>
        <div className="contact-info__wrapper extended-line--green">
          <ContactImage />
          <ContactHeader
            firstName={current.name}
            lastName={current.lastName} />
        </div>
        <div className={`contact-info__body ${edit ? 'contact__layout' : ''}`}>
          {!edit && <ContactEmailText />}
          {!edit && <ContactNumberText />}
          {edit && <Form
            onSubmit={onSubmit}
            initialValues={edit ? current : this.state.newContact}

            render={({ state, handleSubmit, form, submitting, pristine, values }) => (
              <form
                onSubmit={handleSubmit}>
                <NameField placeholder={'test'}></NameField>
                <EmailField></EmailField>
                <NumberFields></NumberFields>
                <div className="btn--wrapper">
                  <Button value={'Cancel'} type={'reset'} label={'Cancel'}></Button>
                  <Button value={'Save'} label={'Save'} ></Button>
                </div>
                <pre></pre>
              </form>
            )}
          />}
        </div>
      </div>
    )
  }

}
export default Person;