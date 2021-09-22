import React from "react";

import { StyledTouchableOpacity, StyledText } from "./Button.styled";

const Button = ({ title, onPress }: { title: string; onPress: () => void }) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
