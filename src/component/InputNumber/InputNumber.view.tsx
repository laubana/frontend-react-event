import React, { ChangeEvent, useState } from "react";
import { InputNumberProps } from "./InputNumber.props";
import { InputNumber, InputNumberContainer } from "./InputNumber.style";
import { FaRegCircleXmark } from "react-icons/fa6";

const InputNumberComponent = ({
  sizing = "medium",
  placeholder,
  number,
  setNumber,
}: InputNumberProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(number || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (!isNaN(Number(event.target.value))) {
      setNumber(event.target.value);
    } else {
      setNumber("");
    }
  };

  const handleReset = () => {
    setInputValue("");
    setNumber("");
  };

  return (
    <InputNumberContainer sizing={sizing}>
      <InputNumber
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      <FaRegCircleXmark color="grey" cursor="pointer" onClick={handleReset} />
    </InputNumberContainer>
  );
};

export default React.memo(InputNumberComponent);
