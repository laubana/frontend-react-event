import React, { ChangeEvent } from "react";
import { InputTextAreaProps } from "./InputTextArea.props";
import { InputTextArea, InputTextAreaContainer } from "./InputTextArea.style";

const InputTextComponent = ({
  sizing = "medium",
  placeholder,
  text,
  setText,
}: InputTextAreaProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <InputTextAreaContainer sizing={sizing}>
      <InputTextArea
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </InputTextAreaContainer>
  );
};

export default React.memo(InputTextComponent);
