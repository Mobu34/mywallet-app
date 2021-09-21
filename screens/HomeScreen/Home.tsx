import React from "react";
import { Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { StyledViewHome } from "./Home.styled";
import { RootState, AppDispatch } from "../../store/store";
import { walletSlice } from "../../store/reducers/wallet.reducer";

const Home = (): JSX.Element => {
  const total = useSelector((state: RootState) => state.walletSlice.total);
  const dispatch: AppDispatch = useDispatch();

  return (
    <StyledViewHome>
      <Text>{total} €</Text>
      <Button
        title="Click to add 10 €"
        onPress={() => {
          dispatch(walletSlice.actions.credit({ total: total + 1 }));
        }}
      />
    </StyledViewHome>
  );
};

export default Home;
