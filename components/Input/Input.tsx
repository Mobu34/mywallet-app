import React from "react";
import { View, Text } from "react-native";

import { StyledView, StyledLabel, StyledInput } from "./Input.styled";

const Input = ({ label, value, setValue, ...rest }) => {
  return (
    <StyledView>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        onChangeText={(text) => setValue(text)}
        value={setValue}
        {...rest}
      />
    </StyledView>
  );
};

export default Input;
