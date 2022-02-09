import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "react-native-spacing-system";
import Constants from "expo-constants";
import uuid from "react-native-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ionicons } from "@expo/vector-icons";

import { StyledView, StyledTitle, StyledViewTransaction } from "./Home.styled";
import { StyledHorizontalView, StyledText } from "../../styles/commun.styled";
import { RootState, AppDispatch } from "../../store/store";
import { credit, debit } from "../../store/reducers/wallet.reducer";

import { Button, Transaction } from "../../components";
import { Modal } from "../../modals";
import Menu from "../../components/Menu/Menu";

const { statusBarHeight } = Constants;

const Home = (): JSX.Element => {
  const { accounts } = useSelector((state: RootState) => state.walletSlice);

  const dispatch: AppDispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accountIndex, setAccountIndex] = useState(0);

  const openAccount = (index) => {
    setAccountIndex(index);
    setIsMenuOpen(false);
  };

  const handleNewTransaction = (label, amount) => {
    const newTransaction = {
      id: uuid.v4(),
      date: new Date(),
      label,
      amount: +amount,
      type: transactionType,
    };
    if (transactionType === "credit")
      dispatch(
        credit({
          transaction: newTransaction,
          index: accountIndex,
        })
      );
    else if (transactionType === "debit")
      dispatch(
        debit({
          transaction: newTransaction,
          index: accountIndex,
        })
      );
    setIsModalOpen(false);
  };

  return (
    <StyledView>
      <Stack size={statusBarHeight} />
      <TouchableOpacity
        style={{
          position: "absolute",
          top: statusBarHeight,
          left: 10,
        }}
        onPress={() => setIsMenuOpen(true)}
      >
        <Ionicons name="ios-menu" size={30} color="black" />
      </TouchableOpacity>
      <StyledHorizontalView>
        <StyledTitle>{accounts[accountIndex].name}</StyledTitle>
      </StyledHorizontalView>
      {accounts[accountIndex].isLinkedToPrimaryAccount && (
        <StyledHorizontalView>
          <Text>Ce compte est lié au compte principal</Text>
        </StyledHorizontalView>
      )}

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
        {accounts[accountIndex]?.transactions?.length ? (
          accounts[accountIndex]?.transactions
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
        <StyledTitle>
          Balance : {accounts[accountIndex].total.toFixed(2)} €
        </StyledTitle>
      </StyledHorizontalView>

      <Modal
        visible={isModalOpen}
        setVisible={setIsModalOpen}
        handleValidate={handleNewTransaction}
        transactionType={transactionType}
      />

      <Menu
        visible={isMenuOpen}
        setVisible={setIsMenuOpen}
        openAccount={openAccount}
      />
    </StyledView>
  );
};

export default Home;
