import { Button, Paper, Typography } from "@mui/material";
import CreateBrand from "../../components/Modals/CreateBrand";

const Admin = () => {
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
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#d051e8",
          ":hover": {
            backgroundColor: "#af47c4",
          },
        }}
      >
        Добавить товар
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#d051e8",
          ":hover": {
            backgroundColor: "#af47c4",
          },
        }}
      >
        Добавить категорию
      </Button>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#d051e8",
          ":hover": {
            backgroundColor: "#af47c4",
          },
        }}
      >
        Добавить бренд
      </Button>
      <CreateBrand open={true} handleClose={() => console.log()} />
    </Paper>
  );
};

export default Admin;
