import { Modal as RNModal, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import {
  StyledMenu,
  StyledTouchableOpacity,
  StyledTouchableOpacityModal,
} from "./Menu.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { Modal } from "../../modals";
import { StyledText } from "../../styles/commun.styled";
import { addAccount, deleteAccount } from "../../store/reducers/wallet.reducer";
import { Ionicons } from "@expo/vector-icons";
import { TMenuProps } from "./Menu.d";

const Menu: FC<TMenuProps> = ({
  visible,
  setVisible,
  openAccount,
  onDeleteAccount,
}) => {
  const { accounts } = useSelector((state: RootState) => state.walletSlice);

  const dispatch = useDispatch();

  const [isModalOpen1, setIsModalOpen1] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
  const [accountIndex, setAccountIndex] = useState<number | null>(null);

  const handleValidate = ({ label }: { label: string }): void => {
    dispatch(
      addAccount({
        label,
        isLinkedToPrimaryAccount: isChecked,
      })
    );
    setIsModalOpen1(false);
  };

  const handleConfirmation = (): void => {
    onDeleteAccount(accountIndex);
    dispatch(deleteAccount({ index: accountIndex }));
    setIsModalOpen2(false);
  };

  const handleCheckbox = (e: boolean): void => {
    setIsChecked(e);
  };

  return (
    <RNModal visible={visible} transparent={true} animationType="fade">
      <StyledTouchableOpacityModal
        onPress={() => setVisible(false)}
        activeOpacity={1}
      >
        <StyledMenu onPress={() => undefined} activeOpacity={1}>
          {accounts.map((a, index) => (
            <StyledTouchableOpacity onPress={() => openAccount(index)}>
              <StyledText>{a.name}</StyledText>
              {index > 0 && (
                <TouchableOpacity
                  onPress={() => {
                    setIsModalOpen2(true);
                    setAccountIndex(index);
                  }}
                >
                  <Ionicons name="close-circle-outline" size={20} color="red" />
                </TouchableOpacity>
              )}
            </StyledTouchableOpacity>
          ))}
          <StyledTouchableOpacity onPress={() => setIsModalOpen1(true)}>
            <StyledText>Ajouter un compte</StyledText>
          </StyledTouchableOpacity>
        </StyledMenu>
      </StyledTouchableOpacityModal>

      <Modal
        visible={isModalOpen1}
        setVisible={setIsModalOpen1}
        mode="account"
        handleValidate={handleValidate}
        handleCheckbox={handleCheckbox}
      />

      <Modal
        visible={isModalOpen2}
        setVisible={setIsModalOpen2}
        mode="confirmation"
        handleValidate={handleConfirmation}
        title="Veuillez confirmer la suppression de ce compte"
      />
    </RNModal>
  );
};

export default Menu;
