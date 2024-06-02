import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Link as LinkMUI,
} from "@mui/material";
import { Link } from "react-router-dom";
import { paths } from "../../paths/paths";

const Registration = () => {
  return (
    <Box
      component="form"
      sx={{
        width: "400px",
      }}
      noValidate
      autoComplete="off"
    >
      <Paper
        sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 5 }}
      >
        <Typography variant="h4" component="h4" align="center">
          Регистрация
        </Typography>
        <TextField id="email" label="Email" />
        <TextField id="password" label="Пароль" />
        <Button variant="outlined" sx={{ alignSelf: "end" }} size="large">
          Зарегистрироваться
        </Button>
        <Typography variant="body1" component="div" sx={{ alignSelf: "end" }}>
          Есть аккаунта?{" "}
          <LinkMUI>
            <Link to={paths.login}>Войти</Link>
          </LinkMUI>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Registration;
