import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import { IModal } from "./ModalProps";
import { Button, TextField } from "@mui/material";

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

const CreateBrand: FC<IModal> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2" sx={{ marginBottom: 2 }}>
          Добавить бренд
        </Typography>
        <Box component="form">
          <TextField
            id="name"
            label="Бренд"
            variant="outlined"
            placeholder="Введите название бренд"
            sx={{ width: "100%", marginBottom: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#d051e8",
                ":hover": {
                  backgroundColor: "#af47c4",
                },
              }}
            >
              Добавить
            </Button>
            <Button
              variant="contained"
              
              onClick={handleClose}
              sx={{
                backgroundColor: "#e85151",
                ":hover": {
                  backgroundColor: "#bb4141",
                },
              }}
            >
              Закрыть
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateBrand;
