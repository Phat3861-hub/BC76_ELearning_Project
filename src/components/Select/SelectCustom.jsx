import { Select } from "antd";
import React from "react";

const SelectCustom = ({
  labelContent,
  options,
  mode,
  handleChange,
  disabled,
  value,
}) => {
  return (
    <div>
      <label className="font-medium mb-2 block" htmlFor="">
        {labelContent}
      </label>
      <Select
        value={value}
        onChange={handleChange}
        mode={mode && mode}
        className="w-full"
        options={options}
        disabled={disabled}
      />
    </div>
  );
};

export default SelectCustom;
