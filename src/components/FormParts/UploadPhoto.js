import React from "react";
import { Field } from "react-final-form"
import TextInput from "./TextInput"
import Icon from "../Icon"

const UploadPhoto = ({ current: { imageUrl } }) => {
  return (
    <div className="photo-wrapper">
      <div className="photo__icon">
        {!imageUrl && <Icon icon="upload" sizeBox="25px"></Icon>}
        {imageUrl && <Icon icon="clear" sizeBox="15px"></Icon>}
      </div>
      <div className="photo--upload"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <Field
          type="file"
          name="file"
          component={TextInput}
        /></div>

    </div>
  );
};

export default UploadPhoto;
