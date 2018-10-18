import React, { Component } from "react";
import { Field } from "react-final-form"
import FileInput from "./FileInput"
import Icon from "../Icon"
import { Subscribe } from "unstated";
import ContactsContainer from "../../unstated/ContactsContainer";

class UploadPhoto extends React.Component {
  render() {
    const { current, current: { imageUrl, id } } = this.props
    return (
      <div className="photo-wrapper">
        <Subscribe to={[ContactsContainer]}>
          {({ removeImage }) =>
            <div className="photo__icon">
              {!imageUrl == '' ?
                <Icon onClick={() => removeImage(current, id)} icon="clear" zIndex='22' position='relative' sizeBox="25px"></Icon> :
                <Icon icon="upload" sizeBox="25px"></Icon>
              }
            </div>}
        </Subscribe>

        <Field
          name='imageUrl'
          component={FileInput}
        />
      </div>
    );
  }

};

export default UploadPhoto;
