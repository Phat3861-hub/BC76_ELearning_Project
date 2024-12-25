import { Input } from "antd";
import React from "react";

const InputCustom = ({
  labelContent,
  placeholder,
  handleChange,
  id,
  name,
  handleBlur,
  value,
  touched,
  error,
  type = "text",
}) => {
  return (
    <div>
      <label className="font-medium mb-2 inline-block" htmlFor={id}>
        {labelContent}
      </label>
      <Input
        value={value}
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        placeholder={placeholder}
      />
      {touched && error ? <p className="text-red-500 mt-2">{error}</p> : null}
    </div>
  );
};

export default InputCustom;
