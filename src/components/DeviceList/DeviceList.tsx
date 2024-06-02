import { Box, Grid } from "@mui/material";
import { useGetAllDeviceQuery } from "../../redux/services/devices";
import DeviceItem from "../DeviceItem/DeviceItem";

const DeviceList = () => {
  const { data } = useGetAllDeviceQuery();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data?.map((device) => (
          <DeviceItem key={device.id} device={device} />
        ))}
      </Grid>
    </Box>
  );
};

export default DeviceList;
