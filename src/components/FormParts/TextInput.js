import React from "react";


const TextInput = ({ input, meta, type, placeholder, onChange }) => {
  return <input
    className="input"
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    {...input}
  />;
};

TextInput.defaultProps = {
  type: "text"
};
export default TextInput;
