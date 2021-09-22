import React, { useState } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { StyledView, StyledViewTransaction } from "./Home.styled";
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
      <Button
        title="TRANSACTION +"
        onPress={() => {
          setIsModalOpen(true);
          setTransactionType("credit");
        }}
      />
      <Button
        title="TRANSACTION -"
        onPress={() => {
          setIsModalOpen(true);
          setTransactionType("debit");
        }}
      />

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
      <Text>{total.toFixed(2)} €</Text>
      <Modal
        visible={isModalOpen}
        setVisible={setIsModalOpen}
        handleValidate={handleNewTransaction}
      />
    </StyledView>
  );
};

export default Home;
