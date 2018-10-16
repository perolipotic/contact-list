import React from "react";
import { Field } from "react-final-form"
import TextInput from "./TextInput"
import Icon from "../Icon"

const UploadPhoto = () => {
  return (
    <div className="photo-wrapper">
      <div className="photo__icon">
        <Icon icon="upload" sizeBox="25px"></Icon>
      </div>
      <div className="photo--upload">
        <Field
          type="file"
          name="file"
          component={TextInput}
        /></div>

    </div>
  );
};

export default UploadPhoto;
