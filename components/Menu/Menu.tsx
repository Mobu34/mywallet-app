import { Modal as RNModal, Text, TouchableOpacity, View } from "react-native";
import React, { FC, useState } from "react";
import {
  StyledMenu,
  StyledTouchableOpacity,
  StyledTouchableOpacityModal,
  StyledView,
} from "./Menu.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { Modal } from "../../modals";
import { StyledText } from "../../styles/commun.styled";
import {
  addAccount,
  deleteAccount,
  walletSlice,
} from "../../store/reducers/wallet.reducer";
import { Ionicons } from "@expo/vector-icons";

const Menu: FC = ({ visible, setVisible, openAccount }) => {
  const { accounts } = useSelector((state: RootState) => state.walletSlice);

  const dispatch = useDispatch();

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [accountIndex, setAccountIndex] = useState(null);

  const handleValidate = (label) => {
    dispatch(
      addAccount({
        label,
        isLinkedToPrimaryAccount: isChecked,
      })
    );
    setIsModalOpen1(false);
  };

  const handleConfirmation = () => {
    dispatch(deleteAccount({ index: accountIndex }));
    setIsModalOpen2(false);
  };

  const handleCheckbox = (e) => {
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
                  // style={{ height: 10, width: 10, backgroundColor: "red" }}
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
      />
    </RNModal>
  );
};

export default Menu;
