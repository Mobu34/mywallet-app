import styled, { css } from "styled-components";

export const StyledView = styled.View`
  width: 400px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin: 5px;
  ${(props) =>
    css`
      background-color: ${props.color};
    `}
`;

export const StyledText = styled.Text``;
