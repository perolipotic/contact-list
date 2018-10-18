import React from "react";


const TextInput = ({ input, meta, type, placeholder, onClick }) => {
  return <input
    className="input"
    type={type}
    placeholder={placeholder}
    onClick={onClick}
    {...input}
  />;
};

TextInput.defaultProps = {
  type: "text"
};
export default TextInput;
