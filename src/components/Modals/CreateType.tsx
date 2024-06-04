import { TextField } from "@mui/material";
import { FC } from "react";

const CreateType: FC = () => {
  return (
    <TextField
      id="name"
      label="Категория"
      variant="outlined"
      placeholder="Введите название категорию"
      sx={{ width: "100%" }}
    />
  );
};

export default CreateType;
