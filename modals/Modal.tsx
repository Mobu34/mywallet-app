import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

import { StyledModal, StyledViewModal, StyledView } from "./Modal.styled";

import { Input, Button } from "../components";

const Modal = ({ visible, setVisible, handleValidate }) => {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const handlePress = () => {
    if (label && amount) handleValidate(label, amount);
  };

  return (
    <StyledModal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <StyledViewModal>
        <StyledView>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text>CLOSE</Text>
          </TouchableOpacity>

          <Input label="Libellé" value={label} setValue={setLabel} />
          <Input
            label="Montant"
            value={amount}
            setValue={setAmount}
            keyboardType="numeric"
          />

          <Button title="Ajouter" onPress={() => handlePress(label, amount)} />
        </StyledView>
      </StyledViewModal>
    </StyledModal>
  );
};

export default Modal;
