import React, { ChangeEvent } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { InputTextProps } from "./InputText.props";
import { InputText, InputTextContainer } from "./InputText.style";

const InputTextComponent = ({
  _size = "medium",
  placeholder,
  text,
  setText,
}: InputTextProps): JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleOnReset = () => {
    setText("");
  };

  return (
    <InputTextContainer _size={_size}>
      <InputText
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleOnChange}
      />
      <FaRegCircleXmark
        color="black"
        cursor="pointer"
        onClick={handleOnReset}
      />
    </InputTextContainer>
  );
};

export default React.memo(InputTextComponent);
