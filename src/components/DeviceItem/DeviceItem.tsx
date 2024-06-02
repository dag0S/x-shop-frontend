import { FC } from "react";
import { IDevice } from "../../types/types";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { StarBorderOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { paths } from "../../paths/paths";

interface IDeviceItem {
  device: IDevice;
}

const DeviceItem: FC<IDeviceItem> = ({ device }) => {
  return (
    <Grid item xs={3}>
      <Paper
        sx={{
          padding: 1,
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link
          to={`${paths.device}/${device.id}`}
          style={{ display: "inline-block", alignSelf: "center" }}
        >
          <img
            className="img"
            src={`${import.meta.env.VITE_API_URL}/${device.img}`}
            alt={device.name}
          />
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            Samsung...
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "2px",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">{device.rating}</Typography>
            <StarBorderOutlined sx={{ width: "20px" }} />
          </Box>
        </Box>
        <Link to={`${paths.device}/${device.id}`}>
          <Typography variant="subtitle1">{device.name}</Typography>
        </Link>
      </Paper>
    </Grid>
  );
};

export default DeviceItem;
