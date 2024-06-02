import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Container from "@mui/material/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <Container sx={{display: "flex", justifyContent: "center", marginTop: 5}}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
