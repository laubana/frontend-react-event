import React, { ChangeEvent, useState } from "react";
import { InputNumberProps } from "./InputNumber.props";
import {
  Container,
  InputContainer,
  InputNumber,
  ErrorContainer,
} from "./InputNumber.style";
import { FaRegCircleXmark } from "react-icons/fa6";
import Text from "../Text";

const InputNumberComponent = ({
  placeholder,
  number,
  setNumber = () => null,
  sizing = "medium",
}: InputNumberProps): JSX.Element => {
  const [input, setInput] = useState<string>(number ? number.toString() : "");
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    if (!isNaN(Number(event.target.value))) {
      setNumber(Number(event.target.value));
      setError("");
    } else {
      setNumber(0);
      setError("Error!");
    }
  };

  const handleReset = () => {
    setInput("");
    setNumber(0);
    setError("");
  };

  return (
    <Container>
      <InputContainer sizing={sizing}>
        <InputNumber
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
        />
        <FaRegCircleXmark color="grey" cursor="pointer" onClick={handleReset} />
      </InputContainer>
      {error && (
        <ErrorContainer sizing={sizing}>
          <Text color="red">{error}</Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default React.memo(InputNumberComponent);
