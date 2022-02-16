import styled from "styled-components/native";
import { getFontSize, getFontWeight } from "../../utils/functions";
import { TStyledText } from "./Text.d";

export const StyledText = styled.Text<TStyledText>`
  text-align: ${({ textAlign = "left" }) => textAlign};
  font-size: ${({ fontSize = "medium" }) => getFontSize(fontSize)};
  font-weight: ${({ fontWeight = "medium" }) => getFontWeight(fontWeight)};
  color: ${({ color = "#000000" }) => color};
`;
