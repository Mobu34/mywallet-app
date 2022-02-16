import { Dispatch, SetStateAction } from "react";

export interface TModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  handleValidate: ({ label }: { label?: string; amount?: string }) => void;
  transactionType?: string;
  mode?: "transaction" | "account" | "confirmation";
  handleCheckbox?: (e: boolean) => void;
  title?: string;
}
