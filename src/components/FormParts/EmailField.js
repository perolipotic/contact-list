import React from "react";
import { Field } from "react-final-form"
import TextInput from "./TextInput"
import Icon from "../Icon"
import { isEmpty, isEmail } from "../../utils/helpers";

const EmailField = () => {
  return (
    <div className="input-wrapper">
      <p className="input-label">
        <Icon icon="email" sizeBox="15px"></Icon>
        <span className="input-label__text">email</span>
      </p>
      <Field
        type="email"
        name="email"
        component={TextInput}
        validate={isEmpty && isEmail}
        placeholder="Email"
      />
    </div>
  );
};

export default EmailField;
