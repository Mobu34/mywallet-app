import styled from "styled-components";
import Constants from "expo-constants";

export const StyledMenu = styled.TouchableOpacity`
  flex: 1;
  background-color: #ffffffff;
  width: 70%;
  padding-top: ${Constants.statusBarHeight}px;
  padding-horizontal: 10px;
`;

export const StyledTouchableOpacityModal = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;
