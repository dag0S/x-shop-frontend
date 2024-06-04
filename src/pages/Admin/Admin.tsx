import { Paper, Typography } from "@mui/material";
import CreateBrand from "../../components/Modals/CreateBrand";
import CustomButton from "../../components/CustomButton/CustomButton";
import ModalCustom from "../../components/Modals/Modal";
import { useState } from "react";
import CreateType from "../../components/Modals/CreateType";
import CreateDevice from "../../components/Modals/CreateDevice";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Paper
      sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 3 }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 500, marginBottom: 2, textAlign: "center" }}
      >
        Админ панель
      </Typography>
      <CustomButton onClick={() => setBrandVisible(true)} size="large">
        Добавить бренд
      </CustomButton>
      <CustomButton onClick={() => setTypeVisible(true)} size="large">
        Добавить категорию
      </CustomButton>
      <CustomButton onClick={() => setDeviceVisible(true)} size="large">
        Добавить товар
      </CustomButton>

      <ModalCustom
        open={brandVisible}
        handleClose={() => setBrandVisible(false)}
        title="Добавить бренд"
      >
        <CreateBrand />
      </ModalCustom>
      <ModalCustom
        open={typeVisible}
        handleClose={() => setTypeVisible(false)}
        title="Добавить категорию"
      >
        <CreateType />
      </ModalCustom>
      <ModalCustom
        open={deviceVisible}
        handleClose={() => setDeviceVisible(false)}
        title="Добавить товар"
      >
        <CreateDevice />
      </ModalCustom>
    </Paper>
  );
};

export default Admin;
