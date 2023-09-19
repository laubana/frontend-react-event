import React, { ChangeEvent } from "react";
import { SelectProps } from "./Select.props";
import { Select, Option } from "./Select.style";

const SelectComponent = ({
  options,
  setOption,
  defaultValue,
  label,
  _size = "medium",
  style,
}: SelectProps): JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const index = event.target.selectedIndex;
    setOption({ label: options[index].label, value: options[index].value });
  };

  return (
    <Select
      _size={_size}
      style={style}
      defaultValue={label ? "" : defaultValue}
      onChange={handleOnChange}
    >
      {label && <Option value="">{label}</Option>}
      {options.map((option, index) => (
        <Option value={option.value} key={index}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default React.memo(SelectComponent);
