import React, { ChangeEvent, useState } from "react";
import { InputPasswordProps } from "./InputPassword.props";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Container, Input } from "./InputPassword.style";

const InputPasswordComponent = ({
  _size = "medium",
  placeholder = "Password",
  text,
  setText,
}: InputPasswordProps): JSX.Element => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleOnToggle = () => {
    setPasswordVisibility((oldValue) => !oldValue);
  };

  return (
    <Container _size={_size}>
      {passwordVisibility ? (
        <>
          <Input
            type="type"
            onChange={handleOnChange}
            value={text}
            placeholder={placeholder}
          />
          <FaEye color="black" cursor="pointer" onClick={handleOnToggle} />
        </>
      ) : (
        <>
          <Input
            type="password"
            onChange={handleOnChange}
            value={text}
            placeholder={placeholder}
            autoComplete="new-password"
          />
          <FaEyeSlash color="black" cursor="pointer" onClick={handleOnToggle} />
        </>
      )}
    </Container>
  );
};

export default React.memo(InputPasswordComponent);
