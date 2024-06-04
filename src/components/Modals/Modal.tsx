import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import { IModal } from "./ModalProps";
import CustomButton from "../CustomButton/CustomButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCustom: FC<IModal> = ({ open, handleClose, title, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
          {title}
        </Typography>
        <Box component="form">
          {children}
          <Box sx={{ display: "flex", justifyContent: "space-between", paddingTop: 2 }}>
            <CustomButton>Добавить</CustomButton>
            <CustomButton
              onClick={handleClose}
              color="#e85151"
              colorHover="#bb4141"
            >
              Закрыть
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalCustom;
