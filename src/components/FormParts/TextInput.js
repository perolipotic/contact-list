import React from "react";


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

TextInput.defaultProps = {
  type: "text"
};
export default TextInput;
