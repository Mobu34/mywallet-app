import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

import { TNewWallet, TTransaction, TWallet } from "./wallet";

const initialState: TNewWallet = {
  accounts: [
    {
      id: uuid.v4(),
      name: "Compte principal",
      total: 100,
      transactions: [
        {
          id: "uzf",
          date: new Date(),
          label: "test",
          amount: 100,
          type: "credit",
        },
      ],
      canDelete: false,
    },
  ],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    credit: (state, action: PayloadAction<TTransaction>) => {
      state.accounts[action.payload.index].total +=
        action.payload.transaction.amount;
      state.accounts[action.payload.index].transactions.push(
        action.payload.transaction
      );
      if (state.accounts[action.payload.index]?.isLinkedToPrimaryAccount) {
        state.accounts[0].total += action.payload.transaction.amount;
        state.accounts[0].transactions.push({
          ...action.payload.transaction,
          label: `[${state.accounts[action.payload.index].name}] - ${
            action.payload.transaction.label
          }`,
        });
      }
    },
    debit: (state, action: PayloadAction<TTransaction>) => {
      state.accounts[action.payload.index].total -=
        action.payload.transaction.amount;
      state.accounts[action.payload.index].transactions.push(
        action.payload.transaction
      );
      if (state.accounts[action.payload.index]?.isLinkedToPrimaryAccount) {
        state.accounts[0].total -= action.payload.transaction.amount;
        state.accounts[0].transactions.push({
          ...action.payload.transaction,
          label: `[${state.accounts[action.payload.index].name}] - ${
            action.payload.transaction.label
          }`,
        });
      }
    },
    addAccount: (state, action) => {
      const newAccount = {
        id: uuid.v4(),
        name: action.payload.label,
        total: 0,
        transactions: [],
        canDelete: true,
        isLinkedToPrimaryAccount: action.payload.isLinkedToPrimaryAccount,
      };
      state.accounts.push(newAccount);
    },
    deleteAccount: (state, action) => {
      state.accounts.splice(action.payload.index, 1);
    },
  },
});

export const { credit, debit, addAccount, deleteAccount } = walletSlice.actions;
export { walletSlice };

export default walletSlice.reducer;
