import React, { FC } from "react";
import { View } from "react-native";

import { StyledView } from "./Transaction.styled";
import moment from "moment";
import { transformAmount } from "../../utils/functions";
import { StyledText } from "../../componentsSC/Text/Text.styled";
import { TTransaction } from "./Transaction.d";

const Transaction: FC<TTransaction> = ({ date, label, amount, type }) => {
  const formatDate = moment(date).format("LL");
  const sign = type === "credit" ? "+" : "-";

  return (
    <StyledView color={type === "credit" ? "#ebfaeb" : "#ffebe6"}>
      <View>
        <StyledText fontSize="x-small">{label}</StyledText>
        <StyledText fontSize="x-small" color="grey">
          {formatDate}
        </StyledText>
      </View>
      <StyledText fontSize="small">
        {sign} {transformAmount(amount)}€
      </StyledText>
    </StyledView>
  );
};

export default Transaction;
