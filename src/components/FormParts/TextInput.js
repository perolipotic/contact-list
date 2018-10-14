import React from "react";


const TextInput = ({ input, meta, type, placeholder }) => {
  return <input
    className="input"
    type={type}
    placeholder={placeholder}
    {...input}
  />;
};

TextInput.defaultProps = {
  type: "text"
};
export default TextInput;
