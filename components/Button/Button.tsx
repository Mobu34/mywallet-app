import React from "react";
import { StyledText } from "../../componentsSC/Text/Text.styled";
import { StyledTouchableOpacity } from "./Button.styled";
import { TButtonProps } from "./Button.d";

const Button = ({ title, onPress }: TButtonProps) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <StyledText color="#FFFFFF" fontSize="small">
        {title}
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
