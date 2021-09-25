import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITransaction {
  id: string;
  date: Date;
  label: string;
  amount: number;
  type: "credit" | "debit";
}

interface IWallet {
  total: number;
  transactions: [ITransaction] | [];
}

const initialState: IWallet = {
  total: 0,
  transactions: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    credit: (state, action: PayloadAction<ITransaction>) => {
      state.total += action.payload.amount;
      state.transactions.push(action.payload);
    },
    debit: (state, action: PayloadAction<ITransaction>) => {
      state.total -= action.payload.amount;
      state.transactions.push(action.payload);
    },
  },
});

export const { credit, debit } = walletSlice.actions;
export { walletSlice };

export default walletSlice.reducer;
