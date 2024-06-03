import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { paths } from "../../paths/paths";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/authSlice";
import Container from "@mui/material/Container";
import { LoginOutlined } from "@mui/icons-material";

const Header = () => {
  // const user = useSelector(selectUser);
  const user = true;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#991cb8" }}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box>
                <Link to={paths.shop}>
                  <Typography variant="h6" component="div">
                    X shop
                  </Typography>
                </Link>
              </Box>
              {user ? (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Link to={paths.admin}>
                    <Button color="inherit">Админ панель</Button>
                  </Link>
                  <Button color="inherit">Выйти</Button>
                </Box>
              ) : (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Link to={paths.login}>
                    <Button color="inherit" startIcon={<LoginOutlined />}>
                      Войти
                    </Button>
                  </Link>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
