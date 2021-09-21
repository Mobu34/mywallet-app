import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IWallet {
  total: number;
  transactions: [
    {
      id: string;
      date: Date;
      name: string;
      amount: number;
      type: "+" | "-";
    }
  ];
}

const initialState: { total: number } = {
  total: 0,
  // transactions: [
  //   {
  //     id: "qfqsfqf",
  //     date: new Date(),
  //     name: "Paiement Luc pour août 2021",
  //     amount: 650,
  //     type: "+",
  //   },
  // ],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    credit: (state, action: PayloadAction<{ total: number }>) => {
      // state.total += action.payload.amount;
      // state.transactions.push(action.payload.newTransaction);
      state.total = action.payload.total;
    },
    // debit: (state, action: PayloadAction<[]>) => {
    //   state.total -= action.payload.amount;
    //   state.transactions.push(action.payload.newTransaction);
    // },
  },
});

export const { credit, debit } = walletSlice.actions;
export { walletSlice };

export default walletSlice.reducer;
