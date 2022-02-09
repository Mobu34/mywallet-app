export interface TTransaction {
  id: string;
  date: Date;
  label: string;
  amount: number;
  type: "credit" | "debit";
}

export interface TWallet {
  total: number;
  transactions: TTransaction[] | [];
}

export interface TAccount {
  id: string | number[];
  name: string;
  total: number;
  transactions: TTransaction[] | [];
  canDelete: boolean;
  isLinkedToPrimaryAccount?: boolean;
}

export interface TNewWallet {
  accounts: TAccount[];
}
