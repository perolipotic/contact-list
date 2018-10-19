import React from "react";
import PropTypes from 'prop-types'



const FileInput = ({ input, meta, imageUrl, placeholder }) => (
  <div className="photo--upload"
    style={{ backgroundImage: `url(${imageUrl})` }}>
    <input
      className="input"
      type="file"
      placeholder={placeholder}
      {...input}
      onChange={(e) => {
        const file = e.target.files[0]
        const reader = new FileReader();

        reader.onloadend = function () {
          input.onChange(reader.result)
        }
        reader.readAsDataURL(file)
      }}
      value=""
    />
  </div>
);
FileInput.propTypes = {
  placeholder: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }),
  meta: PropTypes.shape({
    active: PropTypes.bool,
    data: PropTypes.object,
    dirty: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.any,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
  }),
}



export default FileInput;
