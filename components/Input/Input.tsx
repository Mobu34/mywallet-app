import React, { FC } from "react";

import { StyledView, StyledLabel, StyledInput } from "./Input.styled";
import { TInputProps } from "./Input.d";

const Input: FC<TInputProps> = ({ label, ...rest }) => {
  return (
    <StyledView>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} />
    </StyledView>
  );
};

export default Input;
