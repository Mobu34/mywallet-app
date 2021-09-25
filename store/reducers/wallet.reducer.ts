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
  transactions: [ITransaction];
}

const initialState: IWallet = {
  total: 650,
  transactions: [
    // {
    //   id: "qfqsfqf",
    //   date: "2021-09-21T10:40:50.078Z",
    //   label: "Paiement Luc pour août 2021",
    //   amount: 650,
    //   type: "credit",
    // },
    // {
    //   id: "dssfs",
    //   date: "2021-09-21T18:30:50.078Z",
    //   label: "Bella Napoli resto",
    //   amount: 34,
    //   type: "debit",
    // },
    // {
    //   id: "sdfvsds",
    //   date: "2021-09-23T10:46:50.078Z",
    //   label: "Sauramps manga Slam Dunk",
    //   amount: 100,
    //   type: "debit",
    // },
  ],
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
