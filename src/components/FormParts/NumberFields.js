import React from "react";
import { FieldArray } from 'react-final-form-arrays'
import { Field } from "react-final-form"
import TextInput from "./TextInput"
import Icon from "../Icon"
import { isEmpty } from "../../utils/helpers";

const NumberFields = ({ remove, push }) => {
  return (
    <div className="input-wrapper border-none extended-line--green form-line-position">
      <p className="input-label">
        <Icon icon="phone" sizeBox="15px"></Icon>
        <span className="input-label__text">numbers</span>
      </p>
      <FieldArray name="phoneNumbers">
        {({ fields }) =>
          fields.map((name, index) => (
            <div key={index} className="contact">
              <Field
                name={`${name}.number`}
                component={TextInput}
                placeholder="Number"
                validate={isEmpty}
              />
              <Field
                name={`${name}.label`}
                component={TextInput}
                placeholder="Label"
                validate={isEmpty}
              />
              <div onClick={() => fields.remove(index)}
                className="contact--delete"></div>
            </div>
          ))}
      </FieldArray>
      <div
        onClick={() => push('phoneNumbers', undefined)}
        className="contact--add-new">
        <div className="contact--add"></div>
        <p className="contact--add__text">Add number</p>
      </div>
    </div>
  );
};

export default NumberFields;
