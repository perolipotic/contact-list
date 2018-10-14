import React from "react";
import { Field } from "react-final-form"
import TextInput from "./TextInput"
import Icon from "../Icon"

const NumberFields = () => {
  return (
    <div className="input-wrapper border-none extended-line--green form-line-position">
      <p className="input-label">
        <Icon icon="phone" sizeBox="15px"></Icon>
        <span className="input-label__text">numbers</span>
      </p>
      <div className="contact">
        <Field
          type="number"
          name="phoneNumber"
          component={TextInput}
          placeholder="Number"
        />
        <Field
          name="phoneNumberLabel"
          component={TextInput}
          placeholder="Label"
        />
        <div className="contact--delete"></div>
      </div>
      <div className="contact--add-new">
        <div className="contact--add"></div>
        <p className="contact--add__text">Add number</p>
      </div>
    </div>
  );
};

export default NumberFields;
