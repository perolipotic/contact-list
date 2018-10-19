import React from "react";
import PropTypes from 'prop-types'



const TextInput = ({ input, meta: { error }, type, placeholder, onClick }) => {
  return (
    <div>
      <input
        className="input"
        type={type}
        style={{ borderBottom: error ? '1px solid red' : '' }}
        placeholder={placeholder}
        onClick={onClick}
        {...input}
      />
      <p className="input-error">{error}</p>
    </div>
  )

};
TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
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

TextInput.defaultProps = {
  type: "text"
};
export default TextInput;
