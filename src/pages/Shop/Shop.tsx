import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TypeBar from "../../components/TypeBar/TypeBar";
import { Typography } from "@mui/material";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";

const Shop = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              color: "white",
              marginBottom: 1,
            }}
          >
            Категории
          </Typography>
          <TypeBar />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h4" sx={{ color: "white", marginBottom: 1}}>
            Бренды
          </Typography>
          <BrandBar />
          <DeviceList/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Shop;
