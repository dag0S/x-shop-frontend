import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  TextField,
  Input,
  Button,
} from "@mui/material";
import { CloudUploadOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../redux/store";

const CreateDevice = () => {
  const types = useSelector((state: RootState) => state.types.types);
  const [type, setType] = useState("");

  const brands = useSelector((state: RootState) => state.brands.brands);
  const [brand, setBrand] = useState("");

  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleChangeBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="label-select-type">Категория</InputLabel>
        <Select
          labelId="label-select-type"
          id="select-type"
          value={type}
          label="Категория"
          onChange={handleChangeType}
          sx={{ width: "100%", marginBottom: 2 }}
        >
          {types?.map((type) => (
            <MenuItem key={type.id} value={type.name}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>{" "}
      <FormControl fullWidth>
        <InputLabel id="label-select-brand">Бренд</InputLabel>
        <Select
          labelId="label-select-brand"
          id="select-brand"
          value={brand}
          label="Бренд"
          onChange={handleChangeBrand}
          sx={{ width: "100%", marginBottom: 2 }}
        >
          {brands?.map((brand) => (
            <MenuItem key={brand.id} value={brand.name}>
              {brand.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="name"
        label="Название товара"
        variant="outlined"
        placeholder="Введите название товара"
        sx={{ width: "100%", marginBottom: 2 }}
      />
      <TextField
        id="price"
        type="number"
        label="Цена товара"
        variant="outlined"
        placeholder="Введите цену товара"
        sx={{ width: "100%", marginBottom: 2 }}
      />
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadOutlined />}
        sx={{
          backgroundColor: "#d051e8",
          ":hover": {
            backgroundColor: "#af47c4",
          },
        }}
      >
        Загрузить картинку товара
        <Input
          type="file"
          sx={{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: 1,
            overflow: "hidden",
            position: "absolute",
            bottom: 0,
            left: 0,
            whiteSpace: "nowrap",
            width: 1,
          }}
        ></Input>
      </Button>
    </>
  );
};

export default CreateDevice;
