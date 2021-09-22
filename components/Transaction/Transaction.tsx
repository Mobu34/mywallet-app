import React from "react";
import { View, Text } from "react-native";

import {
  StyledView,
  StyledText,
  StyledTextAmount,
  StyledTextLabel,
} from "./Transaction.styled";
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
  const sign = type === "credit" ? "+" : "-";

  return (
    <StyledView color={type === "credit" ? "#ebfaeb" : "#ffebe6"}>
      <View>
        <StyledText>{formatDate}</StyledText>
        <StyledTextLabel>{label}</StyledTextLabel>
      </View>
      <StyledTextAmount>
        {sign} {amount.toFixed(2)}€
      </StyledTextAmount>
    </StyledView>
  );
};

export default Transaction;
