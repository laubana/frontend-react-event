import React, { ChangeEvent } from "react";
import { SelectProps } from "./Select.props";
import { Select, Option, Container } from "./Select.style";

const SelectComponent = ({
  label,
  defaultValue,
  options,
  setOption,
  size = "medium",
  style,
}: SelectProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const index = event.target.selectedIndex;
    setOption({ label: options[index].label, value: options[index].value });
  };

  return (
    <Container>
      <Select
        sizing={size}
        defaultValue={label ? "" : defaultValue}
        onChange={handleChange}
        style={style}
      >
        {label && <Option value="">{label}</Option>}
        {options.map((option, index) => (
          <Option value={option.value} key={index}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default React.memo(SelectComponent);
