import React from 'react';
import { Form } from 'react-final-form'




import ContactImage from '../components/ContactInfo/ContactImage';
import ContactHeader from '../components/ContactInfo/ContactHeader';
import ContactEmailText from '../components/ContactInfo/ContactEmailText'
import ContactNumberText from '../components/ContactInfo/ContactNumberText';

import NameField from '../components/FormParts/NameField'
import EmailField from '../components/FormParts/EmailField'
import NumberFields from '../components/FormParts/NumberFields'
import Button from '../components/Buttons';


const onSubmit = () => {
  console.log('test')
}

const Person = ({ edit }) => {
  return (
    <div className='contact-info'>
      <div className="contact-info__wrapper extended-line--green">
        <ContactImage />
        <ContactHeader />
      </div>
      <div className={`contact-info__body ${edit ? 'contact__layout' : ''}`}>
        {!edit && <ContactEmailText />}
        {!edit && <ContactNumberText />}
        <Form
          onSubmit={onSubmit}
          /*  initialValues={{ stooge: 'larry', employed: false }} */
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <NameField></NameField>
              <EmailField></EmailField>
              <NumberFields></NumberFields>

              <div className="btn--wrapper">
                <Button value={'pero'} label={'Cancel'}></Button>
                <Button value={'pero'} label={'Save'} ></Button>



                {/*    <button type="submit" disabled={submitting || pristine}>
                  Submit
            </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
            </button> */}
              </div>
              {/*  <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          )}
        />


      </div>
    </div>
  )
}
export default Person;