import React, { Component } from "react";
import { Field } from "react-final-form"
import FileInput from "./FileInput"
import Icon from "../Icon"

class UploadPhoto extends React.Component {
  state = {
    current: this.props.current
  }
  removeImage = () => {
    this.setState({ current: '' })
  }
  render() {
    const { current: { imageUrl } } = this.state
    console.log(this.state.current)

    return (
      <div className="photo-wrapper">
        <div className="photo__icon">
          {!imageUrl && <Icon icon="upload" sizeBox="25px"></Icon>}
          {imageUrl && <Icon icon="clear" sizeBox="15px"></Icon>}
        </div>
        <Field
          name='imageUrl'
          component={FileInput}
        />
      </div>
    );
  }

};

export default UploadPhoto;
