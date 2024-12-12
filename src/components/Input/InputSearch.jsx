import React from "react";
import "./InputSearch.scss";
import { Input } from "antd";

const InputSearch = ({
  placeholder,
  value,
  handleChange,
  handleClick,
  onSearch,
}) => {
  return (
    <Input.Search
      onSearch={onSearch}
      onClick={handleClick}
      onChange={handleChange}
      className="input_search"
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputSearch;
