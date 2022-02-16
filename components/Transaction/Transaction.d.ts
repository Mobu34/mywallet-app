export interface TTransaction {
  date: Date;
  label: string;
  amount: number;
  type: "credit" | "debit";
}
