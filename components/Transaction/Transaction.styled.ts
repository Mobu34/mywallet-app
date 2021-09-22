import styled, { css } from "styled-components";

export const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-bottom-width: 1px;
  border-color: grey;
  ${(props) =>
    css`
      background-color: ${props.color};
    `}
`;

export const StyledText = styled.Text``;

export const StyledTextAmount = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledTextLabel = styled.Text`
  color: grey;
`;
