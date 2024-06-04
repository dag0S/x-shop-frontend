import { ReactNode } from "react";

export interface IModal {
  open: boolean;
  title: string;
  children: ReactNode;
  handleClose: () => void;
}
