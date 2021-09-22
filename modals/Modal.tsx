import React, { useState } from "react";
import { TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { Stack } from "react-native-spacing-system";

import {
  StyledModal,
  StyledTouchableOpacityModal,
  StyledTouchableOpacity,
  StyledViewInput,
  StyledText,
} from "./Modal.styled";
import { StyledHorizontalView } from "../styles/commun.styled";

import { Input, Button } from "../components";

const Modal = ({ visible, setVisible, handleValidate, transactionType }) => {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const handlePress = () => {
    if (label && amount) handleValidate(label, amount);
  };

  return (
    <StyledModal
      visible={visible}
      transparent={true}
      animationType="fade"
      // presentationStyle="pageSheet"
    >
      <StyledTouchableOpacityModal
        onPress={() => setVisible(false)}
        activeOpacity={1}
      >
        <StyledTouchableOpacity onPress={() => {}} activeOpacity={1}>
          <Stack size={15} />

          <StyledHorizontalView>
            <StyledText>Création d'un {transactionType}</StyledText>
          </StyledHorizontalView>

          <Stack size={30} />

          <StyledViewInput>
            <Input label="Libellé" value={label} setValue={setLabel} />
            <Stack size={10} />
            <Input
              label="Montant"
              value={amount}
              setValue={setAmount}
              keyboardType="numeric"
            />
          </StyledViewInput>

          <Stack size={30} />

          <StyledHorizontalView>
            <Button
              title="Ajouter la transaction"
              onPress={() => handlePress(label, amount)}
            />
          </StyledHorizontalView>
          <Stack size={15} />
        </StyledTouchableOpacity>
      </StyledTouchableOpacityModal>
    </StyledModal>
  );
};

export default Modal;
