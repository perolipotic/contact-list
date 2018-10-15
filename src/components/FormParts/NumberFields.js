import React from "react";
import { FieldArray } from 'react-final-form-arrays'
import { Field } from "react-final-form"
import TextInput from "./TextInput"
import Icon from "../Icon"

const NumberFields = ({ pop, push }) => {
  return (
    <div className="input-wrapper border-none extended-line--green form-line-position">
      <p className="input-label">
        <Icon icon="phone" sizeBox="15px"></Icon>
        <span className="input-label__text">numbers</span>
      </p>
      <FieldArray name="numbers">
        {({ fields }) =>
          fields.map((name, index) => (
            <div key={index} className="contact">
              <Field
                type="number"
                name={`${name}.number`}
                component={TextInput}
                placeholder="Number"
              />
              <Field
                name={`${name}.label`}
                component={TextInput}
                placeholder="Label"
              />
              <div onClick={() => pop('numbers', undefined)}
                className="contact--delete"></div>
            </div>
          ))}
      </FieldArray>
      <div
        onClick={() => push('numbers', undefined)}
        className="contact--add-new">
        <div className="contact--add"></div>
        <p className="contact--add__text">Add number</p>
      </div>
    </div>
  );
};

export default NumberFields;
