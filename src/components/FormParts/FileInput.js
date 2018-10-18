import React from "react";


const FileInput = ({ input, meta, placeholder, onClick }) => (
  <div className="photo--upload"
    style={{ backgroundImage: `url(${input.value})` }}>
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




export default FileInput;
