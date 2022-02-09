import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { Stack } from "react-native-spacing-system";
import BouncyCkeckbox from "react-native-bouncy-checkbox";

import {
  StyledModal,
  StyledTouchableOpacityModal,
  StyledTouchableOpacity,
  StyledViewInput,
  StyledText,
} from "./Modal.styled";
import { StyledHorizontalView } from "../styles/commun.styled";

import { Input, Button } from "../components";

const Modal = ({
  visible,
  setVisible,
  handleValidate,
  transactionType,
  mode = "transaction",
  handleCheckbox = () => undefined,
}) => {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const handlePress = () => {
    if (label && amount) handleValidate(label, amount);
    if (mode === "account" && label) handleValidate(label);
    if (mode === "confirmation") handleValidate();
  };

  const placeholder =
    transactionType === "credit" ? "Vente d'un livre" : "Paiement cinéma";

  return (
    <StyledModal visible={visible} transparent={true} animationType="fade">
      <StyledTouchableOpacityModal
        onPress={() => setVisible(false)}
        activeOpacity={1}
      >
        <StyledTouchableOpacity onPress={() => {}} activeOpacity={1}>
          <Stack size={15} />

          {mode === "transaction" && (
            <>
              <StyledHorizontalView>
                <StyledText>Création d'un {transactionType}</StyledText>
              </StyledHorizontalView>

              <Stack size={30} />

              <StyledViewInput>
                <Input
                  label="Libellé"
                  value={label}
                  setValue={setLabel}
                  placeholder={placeholder}
                />
                <Stack size={10} />
                <Input
                  label="Montant"
                  value={amount}
                  setValue={setAmount}
                  keyboardType="numeric"
                  placeholder="7,99"
                />
              </StyledViewInput>

              <Stack size={30} />

              <StyledHorizontalView>
                <Button
                  title="Ajouter la transaction"
                  onPress={() => handlePress(label, amount)}
                />
              </StyledHorizontalView>
            </>
          )}

          {mode === "account" && (
            <>
              <StyledHorizontalView>
                <StyledText>Création d'un nouveau compte</StyledText>
              </StyledHorizontalView>

              <Stack size={30} />

              <StyledViewInput>
                <Input
                  label="Libellé du compte"
                  value={label}
                  setValue={setLabel}
                  placeholder="Compte secondaire"
                />
                <Stack size={30} />

                <StyledHorizontalView>
                  <BouncyCkeckbox
                    onPress={(e) => handleCheckbox(e)}
                    fillColor="green"
                  />
                  <Text>
                    Souhaitez vous lier ce compte au compte principal ?
                  </Text>
                </StyledHorizontalView>
              </StyledViewInput>

              <Stack size={30} />

              <StyledHorizontalView>
                <Button
                  title="Ajouter la transaction"
                  onPress={() => handlePress(label, amount)}
                />
              </StyledHorizontalView>
            </>
          )}

          {mode === "confirmation" && (
            <>
              <StyledHorizontalView>
                <StyledText>
                  Veuillez confirmer la suppression de ce compte
                </StyledText>
              </StyledHorizontalView>
              <Stack size={30} />
              <StyledHorizontalView>
                <Button title="Valider" onPress={() => handlePress()} />
                <View style={{ width: 20 }} />
                <Button title="Annuler" onPress={() => setVisible(false)} />
              </StyledHorizontalView>
            </>
          )}

          <Stack size={15} />
        </StyledTouchableOpacity>
      </StyledTouchableOpacityModal>
    </StyledModal>
  );
};

export default Modal;
