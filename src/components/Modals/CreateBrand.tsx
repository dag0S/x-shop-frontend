import { FC } from "react";
import { TextField } from "@mui/material";

const CreateBrand: FC = () => {
  return (
    <TextField
      id="name"
      label="Бренд"
      variant="outlined"
      placeholder="Введите название бренд"
      sx={{ width: "100%" }}
    />
  );
};

export default CreateBrand;
