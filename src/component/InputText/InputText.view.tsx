import React, { ChangeEvent } from "react";
import { InputTextProps } from "./InputText.props";
import { InputText, InputTextContainer } from "./InputText.style";
import { FaRegCircleXmark } from "react-icons/fa6";

const InputTextComponent = ({
  sizing = "medium",
  placeholder,
  text,
  setText,
}: InputTextProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <InputTextContainer sizing={sizing}>
      <InputText
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
      <FaRegCircleXmark color="black" cursor="pointer" onClick={handleReset} />
    </InputTextContainer>
  );
};

export default React.memo(InputTextComponent);
