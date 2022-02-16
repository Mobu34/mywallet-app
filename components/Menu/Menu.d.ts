import { Dispatch, SetStateAction } from "react";

export interface TMenuProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  openAccount: (index: number) => void;
  onDeleteAccount: (index: number) => void;
}
