import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "react-native-spacing-system";
import Constants from "expo-constants";
import uuid from "react-native-uuid";

import { StyledView, StyledTitle, StyledViewTransaction } from "./Home.styled";
import { StyledHorizontalView, StyledText } from "../../styles/commun.styled";
import { RootState, AppDispatch } from "../../store/store";
import { walletSlice } from "../../store/reducers/wallet.reducer";

import { Button, Transaction } from "../../components";
import { Modal } from "../../modals";

const { statusBarHeight } = Constants;

const Home = (): JSX.Element => {
  const { total, transactions } = useSelector(
    (state: RootState) => state.walletSlice
  );

  const dispatch: AppDispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("");

  const handleNewTransaction = (label, amount) => {
    const newTransaction = {
      id: uuid.v4(),
      date: new Date(),
      label,
      amount: +amount,
      type: transactionType,
    };
    if (transactionType === "credit")
      dispatch(walletSlice.actions.credit(newTransaction));
    else if (transactionType === "debit")
      dispatch(walletSlice.actions.debit(newTransaction));
    setIsModalOpen(false);
  };

  return (
    <StyledView>
      <Stack size={statusBarHeight} />

      <StyledHorizontalView>
        <StyledTitle>My Black Wallet</StyledTitle>
      </StyledHorizontalView>

      <Stack size={30} />

      <StyledHorizontalView>
        <Button
          title="CRÉDITER"
          onPress={() => {
            setIsModalOpen(true);
            setTransactionType("credit");
          }}
        />
        <View style={{ width: 50 }}></View>
        <Button
          title="DÉBITER"
          onPress={() => {
            setIsModalOpen(true);
            setTransactionType("debit");
          }}
        />
      </StyledHorizontalView>

      <Stack size={30} />

      <StyledViewTransaction>
        {transactions.length ? (
          transactions
            .map((t) => (
              <Transaction
                key={t.id}
                date={t.date}
                label={t.label}
                amount={t.amount}
                type={t.type}
              />
            ))
            .sort((a, b) => a.date < b.date)
        ) : (
          <>
            <Stack size={100} />
            <StyledHorizontalView>
              <StyledText>Aucune transaction</StyledText>
            </StyledHorizontalView>
          </>
        )}
      </StyledViewTransaction>

      <Stack size={30} />

      <StyledHorizontalView>
        <StyledTitle>Balance : {total.toFixed(2)} €</StyledTitle>
      </StyledHorizontalView>

      <Modal
        visible={isModalOpen}
        setVisible={setIsModalOpen}
        handleValidate={handleNewTransaction}
        transactionType={transactionType}
      />
    </StyledView>
  );
};

export default Home;
