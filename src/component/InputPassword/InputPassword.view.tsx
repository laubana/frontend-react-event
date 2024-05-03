import React, { ChangeEvent, useState } from "react";
import { InputTextProps } from "./InputPassword.props";
import { InputContainer, InputText } from "./InputPassword.style";
import { FaEye, FaEyeSlash, FaRegCircleXmark } from "react-icons/fa6";

const InputPasswordComponent = ({
  placeholder,
  password,
  setPassword = () => null,
  sizing = "medium",
}: InputTextProps): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleReset = () => {
    setPassword("");
  };

  return (
    <InputContainer sizing={sizing}>
      {visibility ? (
        <InputText
          type="type"
          placeholder={placeholder}
          value={password}
          onChange={handleChange}
        />
      ) : (
        <InputText
          type="password"
          placeholder={placeholder}
          value={password}
          onChange={handleChange}
        />
      )}
      <FaRegCircleXmark color="grey" cursor="pointer" onClick={handleReset} />
      {visibility ? (
        <FaEye color="grey" cursor="pointer" onClick={handleToggle} />
      ) : (
        <FaEyeSlash color="grey" cursor="pointer" onClick={handleToggle} />
      )}
    </InputContainer>
  );
};

export default React.memo(InputPasswordComponent);
