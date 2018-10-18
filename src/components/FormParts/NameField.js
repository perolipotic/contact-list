import React from "react";
import { Field } from "react-final-form"
import TextInput from "./TextInput"
import Icon from "../Icon"
import { isEmpty } from "../../utils/helpers";

const NameField = () => {

  return (
    <div className="input-wrapper">
      <p className="input-label">
        <Icon icon="user" sizeBox="15px"></Icon>
        <span className="input-label__text">full name</span>
      </p>
      <Field
        name="fullName"
        component={TextInput}
        placeholder="Full Name"
        validate={isEmpty}
      />
    </div>
  );
};
export default NameField;
