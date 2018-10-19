import React from "react";
import { Field } from "react-final-form"
import FileInput from "./FileInput"
import Icon from "../Icon"
import { Subscribe } from "unstated";
import ContactsContainer from "../../unstated/ContactsContainer";
import PropTypes from 'prop-types'


class UploadPhoto extends React.Component {
  render() {
    const { current, current: { imageUrl, id } } = this.props
    return (
      <div className="photo-wrapper">
        <Subscribe to={[ContactsContainer]}>
          {({ removeImage }) =>
            <div className="photo__icon">
              {imageUrl && <Icon
                onClick={() => removeImage(current, id)}
                icon="clear"
                zIndex="22"
                position="relative"
                padding="80px"
                borderRadius="100%"
                sizeBox="180px">
              </Icon>
              }
              {!imageUrl && <Icon icon="upload" sizeBox="25px"></Icon>}
            </div>}
        </Subscribe>

        <Field
          name="imageUrl"
          component={FileInput}
          imageUrl={imageUrl}
        />
      </div>
    );
  }

};
UploadPhoto.propTypes = {
  current: PropTypes.object,
}

export default UploadPhoto;
