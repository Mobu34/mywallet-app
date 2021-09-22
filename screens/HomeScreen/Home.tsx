import React, { useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "react-native-spacing-system";

import { StyledView, StyledTitle, StyledViewTransaction } from "./Home.styled";
import { StyledHorizontalView } from "../../styles/commun.styled";
import { RootState, AppDispatch } from "../../store/store";
import { walletSlice } from "../../store/reducers/wallet.reducer";

import { Button, Transaction } from "../../components";
import { Modal } from "../../modals";

const Home = (): JSX.Element => {
  const { total, transactions } = useSelector(
    (state: RootState) => state.walletSlice
  );

  const dispatch: AppDispatch = useDispatch();

  console.log({ total: typeof total });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("");

  const handleNewTransaction = (label, amount) => {
    const newTransaction = {
      id: "egsfsdfsd",
      date: new Date(),
      label,
      amount: Number(amount),
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
        {transactions.map((t) => (
          <Transaction
            key={t.id}
            date={t.date}
            label={t.label}
            amount={t.amount}
            type={t.type}
          />
        ))}
      </StyledViewTransaction>

      <Stack size={30} />

      <StyledHorizontalView>
        <StyledTitle>Balance : {total.toFixed(2)} €</StyledTitle>
      </StyledHorizontalView>

      <Modal
        visible={isModalOpen}
        setVisible={setIsModalOpen}
        handleValidate={handleNewTransaction}
      />
    </StyledView>
  );
};

export default Home;
