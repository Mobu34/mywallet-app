import React, { FC, useState } from "react";
import { Text, View, Platform } from "react-native";
import { Stack } from "react-native-spacing-system";
import BouncyCkeckbox from "react-native-bouncy-checkbox";

import {
  StyledModal,
  StyledTouchableOpacityModal,
  StyledTouchableOpacity,
  StyledViewInput,
} from "./Modal.styled";
import { StyledHorizontalView } from "../styles/commun.styled";

import { Input, Button } from "../components";
import { Controller, useForm } from "react-hook-form";
import { StyledText } from "../componentsSC/Text/Text.styled";
import { TModalProps } from "./Modal.d";

const Modal: FC<TModalProps> = ({
  visible,
  setVisible,
  handleValidate,
  transactionType,
  mode = "transaction",
  handleCheckbox = () => undefined,
  title = "",
}) => {
  const { control, handleSubmit } = useForm();

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
              <StyledText fontWeight="bold" textAlign="center">
                Création d'un {transactionType}
              </StyledText>

              <Stack size={30} />

              <StyledViewInput>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      label="Libellé"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      placeholder={placeholder}
                    />
                  )}
                  name="label"
                />

                <Stack size={10} />
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <Input
                      label="Montant"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      keyboardType="numeric"
                      placeholder="7.99"
                    />
                  )}
                  name="amount"
                />
              </StyledViewInput>

              <Stack size={30} />

              <StyledHorizontalView>
                <Button
                  title="Ajouter la transaction"
                  onPress={handleSubmit(handleValidate)}
                />
              </StyledHorizontalView>
            </>
          )}

          {mode === "account" && (
            <>
              <StyledText fontWeight="bold" textAlign="center">
                Création d'un nouveau compte
              </StyledText>

              <Stack size={30} />

              <StyledViewInput>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur } }) => (
                    <Input
                      label="Libellé du compte"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      placeholder="Compte secondaire"
                    />
                  )}
                  name="label"
                />

                <Stack size={30} />

                <StyledHorizontalView>
                  <BouncyCkeckbox
                    onPress={(e) => handleCheckbox(e)}
                    fillColor="green"
                    style={{ marginLeft: Platform.OS === "android" ? 40 : 0 }}
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
                  onPress={handleSubmit(handleValidate)}
                />
              </StyledHorizontalView>
            </>
          )}

          {mode === "confirmation" && (
            <>
              <StyledText fontWeight="bold" textAlign="center">
                {title}
              </StyledText>

              <Stack size={30} />
              <StyledHorizontalView>
                <Button title="Valider" onPress={handleValidate} />
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
