import React from "react";

import { StyledView, StyledLabel, StyledInput } from "./Input.styled";

const Input = ({ label, value, setValue, placeholder, ...rest }) => {
  return (
    <StyledView>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        onChangeText={(text) => setValue(text)}
        value={setValue}
        placeholder={placeholder}
        {...rest}
      />
    </StyledView>
  );
};

export default Input;
