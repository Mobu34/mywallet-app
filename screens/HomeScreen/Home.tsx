import React, { useState } from "react";
import { Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { StyledView, StyledViewTransaction } from "./Home.styled";
import { RootState, AppDispatch } from "../../store/store";
import { walletSlice } from "../../store/reducers/wallet.reducer";

import * as C from "../../components";

const Home = (): JSX.Element => {
  const { total, transactions } = useSelector(
    (state: RootState) => state.walletSlice
  );

  const dispatch: AppDispatch = useDispatch();

  return (
    <StyledView>
      <C.Button title="TRANSACTION +" onPress={() => console.log("go +")} />
      <C.Button title="TRANSACTION -" onPress={() => console.log("go -")} />

      <StyledViewTransaction>
        {transactions.map((t) => (
          <C.Transaction
            key={t.id}
            date={t.date}
            label={t.label}
            amount={t.amount}
            type={t.type}
          />
        ))}
      </StyledViewTransaction>
      <Text>{total} €</Text>
      {/*<Button
        title="Click to add 10 €"
        onPress={() => {
          dispatch(walletSlice.actions.credit({ total: total + 1 }));
        }}
      /> */}
    </StyledView>
  );
};

export default Home;
