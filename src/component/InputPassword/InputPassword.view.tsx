import React, { ChangeEvent, useState } from "react";
import { InputTextProps } from "./InputPassword.props";
import { InputText, InputTextContainer } from "./InputPassword.style";
import { FaEye, FaEyeSlash, FaRegCircleXmark } from "react-icons/fa6";

const InputPasswordComponent = ({
  sizing = "medium",
  placeholder,
  text,
  setText,
}: InputTextProps): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleReset = () => {
    setText("");
  };

  return (
    <InputTextContainer sizing={sizing}>
      {visibility ? (
        <FaEye color="grey" cursor="pointer" onClick={handleToggle} />
      ) : (
        <FaEyeSlash color="grey" cursor="pointer" onClick={handleToggle} />
      )}
      {visibility ? (
        <InputText
          type="type"
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
        />
      ) : (
        <InputText
          type="password"
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
        />
      )}
      <FaRegCircleXmark color="grey" cursor="pointer" onClick={handleReset} />
    </InputTextContainer>
  );
};

export default React.memo(InputPasswordComponent);
