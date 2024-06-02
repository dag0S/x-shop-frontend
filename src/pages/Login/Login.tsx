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

const Login = () => {
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
          Вход
        </Typography>
        <TextField id="email" label="Email" />
        <TextField id="password" label="Пароль" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" component="div">
            Нету аккаунта?{" "}
            <LinkMUI>
              <Link to={paths.registration}>Зарегистрироваться</Link>
            </LinkMUI>
          </Typography>
          <Button variant="outlined" sx={{ alignSelf: "center" }} size="large">
            Войти
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
