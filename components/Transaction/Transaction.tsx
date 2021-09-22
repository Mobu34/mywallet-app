import React from "react";
import { View, Text } from "react-native";

import { StyledView, StyledText } from "./Transaction.styled";
import moment from "moment";

const Transaction = ({
  date,
  label,
  amount,
  type,
}: {
  date: Date;
  label: string;
  amount: number;
  type: "credit" | "debit";
}) => {
  const formatDate = moment(date).format("LL");

  return (
    <StyledView color={type === "credit" ? "#c2f0c2" : "#ffd6cc"}>
      <StyledText>{formatDate}</StyledText>
      <StyledText>{label}</StyledText>
      <StyledText>{amount}€</StyledText>
    </StyledView>
  );
};

export default Transaction;
