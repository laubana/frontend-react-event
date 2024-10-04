import React, { ChangeEvent } from "react";

import { InputTextAreaProps } from "./InputTextArea.props";
import { TextArea } from "./InputTextArea.style";

import InputBase from "../InputBase";
import InputContainer from "../InputContainer";

const InputTextComponent = ({
  error,
  label,
  placeholder,
  setText,
  sizing = "medium",
  text,
}: InputTextAreaProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <InputBase error={error} label={label} size={sizing}>
      <InputContainer size={sizing}>
        <TextArea
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
          sizing={sizing}
          rows={5}
        />
      </InputContainer>
    </InputBase>
  );
};

export default React.memo(InputTextComponent);
