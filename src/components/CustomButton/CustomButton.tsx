import { Button } from "@mui/material";
import { FC, ReactNode, forwardRef } from "react";

interface ICustomButton {
  children: ReactNode;
  size?: "small" | "large" | "medium";
  onClick?: () => void;
  color?: string;
  colorHover?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const CustomButton: FC<ICustomButton> = forwardRef<
  HTMLButtonElement,
  ICustomButton
>(
  (
    {
      children,
      size = "medium",
      onClick,
      color = "#d051e8",
      colorHover = "#af47c4",
      startIcon,
      endIcon,
    },
    ref
  ) => {
    return (
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        ref={ref}
        variant="contained"
        onClick={onClick}
        size={size}
        sx={{
          backgroundColor: color,
          ":hover": {
            backgroundColor: colorHover,
          },
        }}
      >
        {children}
      </Button>
    );
  }
);

export default CustomButton;
